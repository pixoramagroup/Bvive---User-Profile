import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="src/assets/white_logo.png" alt="Your Logo"></img>
        </div>
        <div style={{ width: "50vh" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          illum quis reprehenderit velit possimus eaque consequuntur labore
          quam, ducimus impedit aut amet distinctio rerum a ipsam repudiandae
          enim delectus sequi.
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Search for trainers</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Bvive. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
