import type { ReactNode } from "react";
import { CustomNavbar } from "./components/custom/navbar";
// import { AnimatedGridPatternDemo } from "./components/custom/background";



interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar prop={children} />
      {/* <main >{children}</main> */}
      <footer className="bg-[#f5f5f5] text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name or Institute. All rights reserved.
      </footer>
    </div>
  );
}
