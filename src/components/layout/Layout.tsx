import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
