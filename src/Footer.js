import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="justify-content-center" style={{ marginTop: "15px" }}>
        <h5>Social Media</h5>
        <span>Znajdziesz mnie na:</span>
        <div className="social d-flex justify-content-center">
          <SocialIcon network="facebook" url="https://www.facebook.com" />
          <SocialIcon network="linkedin" url="http://linkedin.com/in/edith" />
          <SocialIcon
            network="pinterest"
            url="https://pl.pinterest.com"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon network="twitter" url="https://twitter.com/" />
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/?hl=pl"
          />
        </div>
      </div>
      <div className="copy">
        <p>Copyright © Edith Photography. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
