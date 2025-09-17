import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import NavItems from "./NavItems";
import { Menu } from "lucide-react";
import User from "./User";

const Navbar = () => {
  return (
    <nav className="border-border bg-background/50 fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-11/12 items-center justify-between gap-10 px-10 font-semibold md:px-16 lg:px-24">
        {/* Logo */}
        <Logo />
        <Menu size={24} className="cursor-pointer sm:hidden" />

        {/* Nav Items */}
        <NavItems />

        {/* User Actions */}

        <div className="hidden items-center gap-5 sm:flex md:gap-10 lg:gap-20">
          {/* User Profile */}
          <User />

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
