import React from "react";
import "../../styles/header.sass";
import vitalineaLogo from "../../assets/vitalinea-logo.png";
import facebookLogo from "../../assets/facebook-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import youtubeLogo from "../../assets/youtube-logo.svg";
import menuIcon from "../../assets/menu-icon.svg";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="imgContainer">
          <img src={vitalineaLogo} alt="Vitalínea Logo" />
        </div>
        <nav className="navbar">
          <div className="navbarContainerLink">
            <ul>
              <li>
                <a href="#">Nuevos productos</a>
              </li>
              <li>
                <a href="#">Disfruta cuidarte</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="navbarContainerRed">
            <ul>
              <li>
                <img src={facebookLogo} alt="Facebook Vitalínea Logo" />
              </li>
              <li>
                <img src={instagramLogo} alt="Instagram Vitalínea Logo" />
              </li>
              <li>
                <img src={youtubeLogo} alt="Youtube Vitalínea Logo" />
              </li>
            </ul>
          </div>
          <div>
            <img src={menuIcon} alt="Menu Icon" />
          </div>
        </nav>
      </div>
    </header>
  );
};
