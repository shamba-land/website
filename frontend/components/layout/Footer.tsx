import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-icon.svg"
                alt=""
                width={20}
                height={26}
                className="h-6 w-auto"
              />
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-primary">Shamba</span>
                <span className="text-xl font-bold text-accent">.land</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering smallholder farmers through geospatial CRM technology.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#products"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shamba.land. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
