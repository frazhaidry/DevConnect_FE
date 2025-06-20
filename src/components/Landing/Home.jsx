import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import Features from "./Features";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Faq from "./Faq";
import UpCmnFeatures from "./UpCmnFeatures";
import WhyDevconnekt from "./WhyDeconnekt";
import HowItWorks from "./HowItWorks";


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
    
     <div className="bg-gray-50 min-h-screen flex flex-col">

      <Hero/>
       <AboutUs/>
      <Features/>
      <WhyDevconnekt/>
      <UpCmnFeatures/>
      <HowItWorks/>
      
      <Testimonial/>
      <Blog/>
      <Faq/>
      
    </div>
    
   </>
  );
};



export default Home