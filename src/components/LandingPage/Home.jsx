import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Features from "./Features";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Faq from "./Faq";
import Footer from "../Footer";


const Home = () => {
   


    const location = useLocation();
  
    // const isAuthenticated = user !== null;
   
    useEffect(() => {
        if (location.state?.scrollTo) {
          const section = document.getElementById(location.state.scrollTo);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [location]);

   

  return (
   <>
    <Navbar/>
     <div className="bg-gray-50 min-h-screen flex flex-col">

      <Hero/>
      <Features/>
      <AboutUs/>
      <Testimonial/>
      <Blog/>
      <Faq/>
      
    </div>
    <Footer/>
   </>
  );
};



export default Home