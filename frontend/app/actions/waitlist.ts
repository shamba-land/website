"use server";

import { z } from "zod";
import { Resend } from "resend";
import { Client as HubSpotClient } from "@hubspot/api-client";
import { WaitlistConfirmation } from "@/emails/WaitlistConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);
const hubspot = process.env.HUBSPOT_ACCESS_TOKEN
  ? new HubSpotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })
  : null;

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type WaitlistState = {
  success: boolean;
  message: string;
} | null;

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const parsed = waitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0].message,
    };
  }

  const { email } = parsed.data;

  try {
    // Store contact in Resend Audience (acts as waitlist database)
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Store contact in HubSpot CRM (if configured)
    if (hubspot) {
      try {
        await hubspot.crm.contacts.basicApi.create({
          properties: {
            email,
            lifecyclestage: "subscriber",
            hs_lead_status: "NEW",
          },
          associations: [],
        });
      } catch (hubspotError) {
        // Don't fail the signup if HubSpot errors (e.g. duplicate contact)
        console.error("HubSpot sync error:", hubspotError);
      }
    }

    // Send branded auto-reply to the user
    await resend.emails.send({
      from: "Shamba.land <waitlist@shamba.land>",
      to: email,
      subject: "Welcome to the Shamba.land waitlist!",
      react: WaitlistConfirmation({ email }),
    });

    // Notify the team
    await resend.emails.send({
      from: "Waitlist <waitlist@shamba.land>",
      to: "info@shamba.land",
      subject: `New waitlist signup: ${email}`,
      text: `New signup on shamba.land waitlist:\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
    });

    return {
      success: true,
      message: "You're on the list! Check your inbox for a confirmation.",
    };
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us at info@shamba.land.",
    };
  }
}
