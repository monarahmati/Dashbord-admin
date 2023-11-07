import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

const mainLayout = () => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    if(!token) {
        navigate("/login")
    }

  return (
    <div className="wrapper" style={{ minHeight: "100h" }}>
      <Sidebar />
      <div className="main">

        {/* MAIN */}
        <TopNavbar />
        <main className="content">
          <div className="continer-fluid p-0">
            <Outlet />
          </div>
        </main>

        {/* //FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default mainLayout;
