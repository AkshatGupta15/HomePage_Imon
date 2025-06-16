import { useState, type ReactNode } from "react";
import { Link,useLocation } from "react-router-dom";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

export function CustomNavbar({ prop }: { prop?: ReactNode }) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Research", link: "/research" },
    { name: "Group", link: "/group" },
    { name: "Publication", link: "/publication" },
    { name: "Projects", link: "/project" },
    { name: "Gallery", link: "/gallery" },
    { name: "IITK", link: "https://www.iitk.ac.in", external: true },
    { name: "EE", link: "https://www.iitk.ac.in/ee/", external: true },
    { name: "Teaching", link: "/teaching" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-4 left-0 w-full z-50 ">
        <NavBody>
          {/* <NavbarLogo /> */}
          <div className="flex gap-8 w-full">
            {navItems.map((item, idx) => {
  const isActive = location.pathname === item.link;

  return item.external ? (
    <a
      key={idx}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-md lora-bold-400 hover:text-indigo-600 ${
        isActive ? "text-indigo-600" : "text-gray-800"
      }`}
    >
      {item.name}
    </a>
  ) : (
    <Link
      key={idx}
      to={item.link}
      className={`text-md lora-bold-400 hover:text-indigo-600 ${
        isActive ? "text-indigo-600" : "text-gray-800"
      }`}
    >
      {item.name}
    </Link>
  );
})}

          </div>
          <div className="flex items-center gap-4">
          <NavbarLogo />

            {/* <NavbarButton variant="secondary" className="lora-bold-500 text-md">Contact</NavbarButton> */}
            {/* <NavbarButton variant="primary">Book a call</NavbarButton> */}
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            {/* <NavbarLogo /> */}
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <NavbarLogo />

          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
  const isActive = location.pathname === item.link;

  return item.external ? (
    <a
      key={`mobile-link-${idx}`}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setIsMobileMenuOpen(false)}
      className={`relative block text-md lora-regular-400 ${
        isActive ? "text-indigo-600" : "text-neutral-600"
      }`}
    >
      {item.name}
    </a>
  ) : (
    <Link
      key={`mobile-link-${idx}`}
      to={item.link}
      onClick={() => setIsMobileMenuOpen(false)}
      className={`relative block text-md lora-regular-400 ${
        isActive ? "text-indigo-600" : "text-neutral-600"
      }`}
    >
      {item.name}
    </Link>
  );
})}

            {/* <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full lora-bold-500 text-md"
              >
                Contact
              </NavbarButton>
      
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="w-full flex-grow mt-14">
        {prop}
      </div>



    </div>
  );
}
