import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >

          <a href="https://www.linkedin.com/in/muhammad-jamal-muhammad-ashraf-672250230/" className="items">
            <CiLinkedin className="icons" />
          </a>
        
          <a href="https://github.com/Jamalashraf5927" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="jamalashraf527@gmail.com"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
