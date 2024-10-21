import CopyRight from "./CopyRight";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between rounded-tr-xl bg-neutral-100 px-8 pb-4 pt-8">
      <MainNav />
      <CopyRight />
    </div>
  );
}

export default Sidebar;
