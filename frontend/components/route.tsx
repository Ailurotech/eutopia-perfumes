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
  Path: "/store-location",
  Name: "Store Location",
  Link: ({ children, className }: LinkProps) => (
    <Link href={StoreLocation.Path} className={className}>
      {children}
    </Link>
  ),
};

const Privacy = {
  Path: "/privacy",
  Name: "Privacy",
  Link: ({ children, className }: LinkProps) => (
    <Link href={Privacy.Path} className={className}>
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

const FRR = {
  Path: "/frr",
  Name: "FRR",
  Link: ({ children, className }: LinkProps) => (
    <Link href={FRR.Path} className={className}>
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
  FRR,
};

export type NavigationMenuTypes = typeof NavigationRoute;
export type FooterMenuTypes = typeof FooterRoute;
