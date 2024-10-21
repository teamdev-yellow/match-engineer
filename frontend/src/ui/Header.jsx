import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between px-9 py-6">
      <Logo />
      <NavLink
        to="account"
        className="flex gap-4 rounded-full border-2 border-neutral-200 px-2 py-4"
      >
        <FaUserCircle className="h-5 w-5 self-center" />
        <span className="mr-3 self-center text-sm font-medium">Will Smith</span>
      </NavLink>
    </div>
  );
}

export default Header;
