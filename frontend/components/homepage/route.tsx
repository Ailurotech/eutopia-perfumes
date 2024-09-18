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

export type NavigationMenuTypes = typeof NavigationRoute;
