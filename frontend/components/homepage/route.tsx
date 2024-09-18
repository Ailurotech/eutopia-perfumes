import Link from "next/link";

const Rout = {
  Path: "/",
  Name: "Home",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Rout.Path}>{children}</Link>
  ),
};

const All = {
  Path: "/all",
  Name: "ALL",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={All.Path}>{children}</Link>
  ),
};

const ForHer = {
  Path: "/for-her",
  Name: "For Her",
  Link: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <Link href={ForHer.Path} className={className}>
      {children}
    </Link>
  ),
};

const ForHim = {
  Path: "/for-him",
  Name: "For Him",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={ForHim.Path}>{children}</Link>
  ),
};

const Neutral = {
  Path: "/neutral",
  Name: "Neutral",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Neutral.Path}>{children}</Link>
  ),
};

const Story = {
  Path: "/story",
  Name: "Story",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Story.Path}>{children}</Link>
  ),
};

const Contact = {
  Path: "/contact",
  Name: "Contact",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Contact.Path}>{children}</Link>
  ),
};

const Join = {
  Path: "/join",
  Name: "Join",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Join.Path}>{children}</Link>
  ),
};

const Site = {
  Path: "/site",
  Name: "Site",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Site.Path}>{children}</Link>
  ),
};

const AboutUs = {
  Path: "/about-us",
  Name: "About Us",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={AboutUs.Path}>{children}</Link>
  ),
};

const StoreLocation = {
  Path: "/store-location",
  Name: "Store Location",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={StoreLocation.Path}>{children}</Link>
  ),
};

const Privacy = {
  Path: "/privacy",
  Name: "Privacy Policy",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Privacy.Path}>{children}</Link>
  ),
};

const Terms = {
  Path: "/terms",
  Name: "Terms of Service",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={Terms.Path}>{children}</Link>
  ),
};

const FAQ = {
  Path: "/frequently-asked-questions",
  Name: "FAQ",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={FAQ.Path}>{children}</Link>
  ),
};

const FRR = {
  Path: "/shipping-returns-refund",
  Name: "FRR",
  Link: ({ children }: { children: React.ReactNode }) => (
    <Link href={FRR.Path}>{children}</Link>
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
  AboutUs,
  StoreLocation,
  Privacy,
  Terms,
  FAQ,
  FRR,
};

export type NavigationMenuTypes = typeof NavigationRoute;
