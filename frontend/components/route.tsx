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
