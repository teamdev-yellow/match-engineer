import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[5rem_1fr] bg-neutral-50">
      <Header />
      <div className="grid grid-cols-[15rem_1fr]">
        <Sidebar />
        <main className="mx-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
