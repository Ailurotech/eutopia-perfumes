import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
}

const Rout = {
  Path: "/",
  Name: "Home",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Rout.Path} className={className}>
      {children}
    </Link>
  ),
};

const All = {
  Path: "/all",
  Name: "ALL",
  Link: ({ children, className }: LinkProps) => (
    <Link href={All.Path} className={className}>
      {children}
    </Link>
  ),
};

const ForHer = {
  Path: "/for-her",
  Name: "For Her",
  Link: ({ children, className }: LinkProps) => (
    <Link href={ForHer.Path} className={className}>
      {children}
    </Link>
  ),
};

const ForHim = {
  Path: "/for-him",
  Name: "For Him",
  Link: ({ children, className }: LinkProps) => (
    <Link href={ForHim.Path} className={className}>
      {children}
    </Link>
  ),
};

const Neutral = {
  Path: "/neutral",
  Name: "Neutral",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Neutral.Path} className={className}>
      {children}
    </Link>
  ),
};

const Story = {
  Path: "/story",
  Name: "Story",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Story.Path} className={className}>
      {children}
    </Link>
  ),
};

const Contact = {
  Path: "/contact",
  Name: "Contact",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Contact.Path} className={className}>
      {children}
    </Link>
  ),
};

const Join = {
  Path: "/join",
  Name: "Join",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Join.Path} className={className}>
      {children}
    </Link>
  ),
};

const Site = {
  Path: "/site",
  Name: "Site",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Site.Path} className={className}>
      {children}
    </Link>
  ),
};

const AboutUs = {
  Path: "/about-us",
  Name: "About Us",
  Link: ({ children, className }: LinkProps) => (
    <Link href={AboutUs.Path} className={className}>
      {children}
    </Link>
  ),
};

const StoreLocation = {
  Path: "/site",
  Name: "Store Location",
  Link: ({ children, className }: LinkProps) => (
    <Link href={StoreLocation.Path} className={className}>
      {children}
    </Link>
  ),
};

const Privacy = {
  Path: "/privacy-policy",
  Name: "Privacy Policy",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Privacy.Path} className={className}>
      {children}
    </Link>
  ),
};

const Terms = {
  Path: "/terms-of-service",
  Name: "Terms of Service",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Terms.Path} className={className}>
      {children}
    </Link>
  ),
};

const FAQ = {
  Path: "/faq",
  Name: "FAQ",
  Link: ({ children, className }: LinkProps) => (
    <Link href={FAQ.Path} className={className}>
      {children}
    </Link>
  ),
};

const RRP = {
  Path: "returns-and-refund-policy",
  Name: "Returns and Refund Policy",
  Link: ({ children, className }: LinkProps) => (
    <Link href={RRP.Path} className={className}>
      {children}
    </Link>
  ),
};

const Payment = {
  Path: "/payment-method",
  Name: "Payment Method",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Payment.Path} className={className}>
      {children}
    </Link>
  ),
};

const Shipping = {
  Path: "/shipping-policy",
  Name: "Shipping Policy",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Shipping.Path} className={className}>
      {children}
    </Link>
  ),
};

export const RoutRoute = {
  Rout,
};

export const NavigationRoute = {
  All,
  ForHer,
  ForHim,
  Neutral,
  Story,
  Contact,
  Join,
  Site,
};

export const FooterRoute = {
  Story,
  StoreLocation,
  Privacy,
  FAQ,
  RRP,
  Terms,
  Payment,
  Shipping,
};

export type NavigationMenuTypes = typeof NavigationRoute;
export type FooterMenuTypes = typeof FooterRoute;
