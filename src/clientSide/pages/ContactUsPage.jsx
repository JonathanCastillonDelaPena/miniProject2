import React from "react";
import NavBar from "../components/common/NavBar";
import Contact from "../components/Contact";
import ContactPageHeader from "../components/ContactPageHeader";
import Footer from "../components/Footer";
import Top from "../components/Top";

const ContactUsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Top />
        <ContactPageHeader />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
