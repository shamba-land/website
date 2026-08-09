import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Delete Your Shamba Account",
  description:
    "How to delete a Shamba account, what account data is removed, and what organization records may be retained.",
};

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header solid />

      <main className="flex-1">
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 space-y-3 border-b border-border pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Shamba mobile app
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Delete your account
              </h1>
              <p className="leading-relaxed text-muted-foreground">
                You can permanently delete your Shamba account from the mobile
                app. Shamba is operated by Axiom Analytics.
              </p>
            </div>

            <div className="space-y-8 [&_section]:space-y-3">
              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  Delete your account in the app
                </h2>
                <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
                  <li>Sign in to the Shamba mobile app.</li>
                  <li>Open the More tab.</li>
                  <li>Select Delete account.</li>
                  <li>Review the warning and confirm Delete account.</li>
                </ol>
                <p className="leading-relaxed text-muted-foreground">
                  If you are the last owner of a workspace or organization, you
                  must transfer ownership before deleting your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  If you cannot use the app
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Email{" "}
                  <Link
                    href="mailto:privacy@shamba.com?subject=Shamba%20account%20deletion%20request"
                    className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                  >
                    privacy@shamba.com
                  </Link>{" "}
                  from the email address linked to your account. Use the subject
                  “Shamba account deletion request” and include the name of your
                  organization or workspace. Do not send a login code, identity
                  document, or other sensitive information. We may ask for a
                  limited verification step before processing the request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  Data removed with your account
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Your name and sign-in email address or phone number.</li>
                  <li>Linked sign-in identities and active device sessions.</li>
                  <li>Push notification tokens, preferences, and inbox items.</li>
                  <li>Your active workspace and organization memberships.</li>
                  <li>Locally stored Shamba data on the device used to delete the account.</li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  Active account access is removed when in-app deletion succeeds.
                  Account data is deleted or anonymized within 90 days of account
                  closure. Rolling backups are overwritten within approximately
                  35 days.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  Data that may be retained
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Records you created while working for an organization, such as
                  farmer, farm, plot, survey, task, distribution, and audit
                  records, belong to that organization as Customer Data. They are
                  not deleted when your personal sign-in account is deleted. The
                  organization controls that data and its retention. Contact the
                  organization if you want to exercise rights relating to its
                  records.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  We may also retain limited security, legal, billing, tax, and
                  audit records for the periods described in our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  . Retained records are restricted to the applicable legal,
                  security, or contractual purpose.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
