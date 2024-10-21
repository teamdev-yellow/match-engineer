import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdGroups } from "react-icons/md";

function MainNav() {
  return (
    <ul>
      <li>
        <NavLink
          className="flex gap-4 rounded-full p-3 text-base font-medium text-neutral-500 transition-all duration-150 hover:bg-neutral-50 [&.active]:font-bold [&.active]:text-neutral-900"
          to="/home"
        >
          <GoHomeFill className="h-6 w-6" />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className="flex gap-4 rounded-full p-3 text-base font-medium text-neutral-500 transition-all duration-150 hover:bg-neutral-50 [&.active]:font-bold [&.active]:text-neutral-900"
          to="/group"
        >
          <MdGroups className="h-6 w-6" />
          Group
        </NavLink>
      </li>

      <li className="mt-6">
        <NavLink
          className="flex justify-center rounded-full bg-neutral-900 py-3 text-sm font-bold text-neutral-200 transition-all duration-150 hover:bg-neutral-800"
          to="/match"
        >
          Match
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
