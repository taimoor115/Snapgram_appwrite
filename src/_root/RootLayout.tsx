import Bottombar from "@/lib/utils/Shared/Bottombar";
import LeftSidebar from "@/lib/utils/Shared/LeftSidebar";
import Topbar from "@/lib/utils/Shared/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
