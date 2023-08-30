import { Link } from "react-router-dom";

import logo from "../../assets/logo.webp";
import discordIcon from "../../assets/icons/socials/discord.svg";
import telegramIcon from "../../assets/icons/socials/telegram.svg";
import instagramIcon from "../../assets/icons/socials/instagram.svg";
import linkedinIcon from "../../assets/icons/socials/linkedin.svg";
import youtubeIcon from "../../assets/icons/socials/youtube.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-section-spray-big" />
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-logo">
            <Link className="header-logo__link" href="#">
              <img className="footer-logo__img" src={logo} alt="footer logo" />
            </Link>
          </div>
          <div className="footer-socials">
            <Link target="_blank" to="https://mui.com/material-ui/material-icons/" className="footer-social__link" >
              <img src={discordIcon} alt="discord link" />
            </Link>
            <Link target="_blank" to="https://mui.com/material-ui/material-icons/" className="footer-social__link" >
              <img src={telegramIcon} alt="telegram link" />
            </Link>
            <Link target="_blank" to="https://mui.com/material-ui/material-icons/" className="footer-social__link" >
              <img src={instagramIcon} alt="instagram link" />
            </Link>
            <Link target="_blank" to="https://mui.com/material-ui/material-icons/" className="footer-social__link" >
              <img src={linkedinIcon} alt="linkedin link" />
            </Link>
            <Link target="_blank" to="https://mui.com/material-ui/material-icons/" className="footer-social__link" >
              <img src={youtubeIcon} alt="youtube link" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
