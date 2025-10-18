import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">CyberLogix.ai</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered intelligence platform for logistics companies providing regulatory compliance, operational
              insights, and strategic forecasting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@cyberlogix.ai</li>
              <li>Support: support@cyberlogix.ai</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
            <p>© {currentYear} CyberLogix.ai. All rights reserved.</p>
            <p className="text-balance">
              Made with ❤️ by K.A.M.P. team on AI Engine hackathon, Warsaw 2025. Vibe for life.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
