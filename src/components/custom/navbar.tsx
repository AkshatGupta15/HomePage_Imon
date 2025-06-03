import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function CustomNavbar({ prop }: { prop?: ReactNode }) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Research", link: "/research" },
    { name: "Group", link: "/group" },
    { name: "Publication", link: "/publication" },
    { name: "IITK", link: "https://www.iitk.ac.in", external: true },
    { name: "EE", link: "https://www.iitk.ac.in/ee/", external: true },
    { name: "Teaching", link: "/teaching" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <div className="flex gap-6">
            {navItems.map((item, idx) =>
              item.external ? (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-black"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.link}
                  className="text-sm font-medium text-gray-600 hover:text-black"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) =>
              item.external ? (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ) : (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </Link>
              )
            )}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

        <div className="w-full flex-grow">
            {prop}
        </div>



    </div>
  );
}
