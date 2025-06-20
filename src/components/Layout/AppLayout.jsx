import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const AppLayout = () => {
    return (
        <div className="pt-24">
          <Navbar />
          <div className="min-h-screen bg-[#121212]">
            <Outlet /> {/* This will render Public or Private layout inside */}
          </div>
          <main/>
         <Footer />
        </div>
      );
}

export default AppLayout