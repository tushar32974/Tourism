import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import Testimonials from "../../components/Testimonials";
import "../../App_copy.css";

const HomePage = () => {
  return (
    <>
      <div className="super-container" style={{width:"100%",overflow:"hidden"}}>
        <Header />
        <div>
          <Carousel/>
          {/*<Testimonials/> */}
          <Footer/>
          <Copyright/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
