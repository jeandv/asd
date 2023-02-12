import React, { useState } from "react";
import { AnimationContainer } from "../utils";
import "../../styles/header.sass";
import vitalineaLogo from "../../assets/vitalinea-logo.png";
import facebookLogo from "../../assets/facebook-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import youtubeLogo from "../../assets/youtube-logo.svg";
import menuIcon from "../../assets/menu-icon.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <AnimationContainer customClassName="imgContainer">
          <img src={vitalineaLogo} alt="Vitalínea Logo" />
        </AnimationContainer>

        <nav className="navbar">
          <AnimationContainer customClassName="navbarContainerLink">
            <ul className="navLinks">
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
          </AnimationContainer>

          <AnimationContainer customClassName="navbarContainerRed">
            <ul className="redesSociales">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src={facebookLogo} alt="Facebook Vitalínea Logo" />
                </a>
              </li>

              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src={instagramLogo} alt="Instagram Vitalínea Logo" />
                </a>
              </li>

              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <img src={youtubeLogo} alt="Youtube Vitalínea Logo" />
                </a>
              </li>
            </ul>
          </AnimationContainer>

          <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
            <img src={menuIcon} alt="Menu Icon" />
          </div>
        </nav>
      </div>

      <div className={isOpen ? "menuOpen" : "menuClosed"}>
        <div className="navbarContainerLinkToggle">
          <ul className="navLinks">
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

        <div className="navbarContainerRedToggle">
          <ul className="redesSociales">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={facebookLogo} alt="Facebook Vitalínea Logo" />
              </a>
            </li>

            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={instagramLogo} alt="Instagram Vitalínea Logo" />
              </a>
            </li>

            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={youtubeLogo} alt="Youtube Vitalínea Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
