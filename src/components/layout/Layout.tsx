import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <div className="flex flex-col w-full flex-1">
        <Header />

        <main className="overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
