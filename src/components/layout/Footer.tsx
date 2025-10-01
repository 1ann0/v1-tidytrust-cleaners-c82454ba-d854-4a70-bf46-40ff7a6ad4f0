import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 pr-8">
            <a href="#" className="flex items-center mb-4">
              <img src="/logo.jpg" alt="TidyTrust Cleaners logo" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground max-w-sm">
              Your Home, Impeccably Clean. Your Trust, Perfectly Kept. Professional cleaning services in Kenya.
            </p>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={`${social.href}-${index}`}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TidyTrust Cleaners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};