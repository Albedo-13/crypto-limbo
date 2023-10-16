import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./footer.scss";
import logo from "../../assets/logo.webp";
import discord from "../../assets/icons/socials/discord.svg";
import telegram from "../../assets/icons/socials/telegram.svg";
import instagram from "../../assets/icons/socials/instagram.svg";
import linkedin from "../../assets/icons/socials/linkedin.svg";
import youtube from "../../assets/icons/socials/youtube.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-section-spray-big" />
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-logo">
            <Link to="/" className="header-logo__link">
              <img className="footer-logo__img undraggable" src={logo} alt="footer logo" />
            </Link>
          </div>
          <div className="footer-socials">
            <Link target="_blank" to="https://discord.com/" className="footer-social__link">
              <img src={discord} alt="discord link" />
            </Link>
            <Link target="_blank" to="https://telegram.org/" className="footer-social__link">
              <img src={telegram} alt="telegram link" />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/" className="footer-social__link">
              <img src={instagram} alt="instagram link" />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/" className="footer-social__link">
              <img src={linkedin} alt="linkedin link" />
            </Link>
            <Link target="_blank" to="https://www.youtube.com/" className="footer-social__link">
              <img src={youtube} alt="youtube link" />
            </Link>
          </div>
        </div>
        <hr className="h-line mt-51px" style={{ marginTop: "51px" }} />
        <div className="footer-links">
          <div className="footer-links__block">
            <div className="footer-links__label">Crypto Brains</div>
            <div className="footer-links__link">
              <Link to="#">About us</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Our Team</Link>
            </div>
            <div className="footer-links__link">
              <Link to="/road-map">Road Map</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Risk Disclosure</Link>
            </div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Knowledge</div>
            <div className="footer-links__link">
              <HashLink to="/#FrequentlyAskedQuestions" className="footer-links__link">
                F.A.Q.
              </HashLink>
            </div>
            <div className="footer-links__link">
              <Link to="#">Articals</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Video Tutorial</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Beginner's Guide</Link>
            </div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Services</div>
            <div className="footer-links__link">
              <Link to="#">API Service</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Token Listing</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">API Document</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Ticket Services</Link>
            </div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Exchange</div>
            <div className="footer-links__link">
              <Link to="#">P2P</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Referral</Link>
            </div>
            <div className="footer-links__link">
              <NavLink to="/market">Market</NavLink>
            </div>
            <div className="footer-links__link">
              <Link to="#">Affiliate Program</Link>
            </div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Support Service</div>
            <div className="footer-links__link">
              <Link to="#">Career</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Community</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Customer Chat</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Technical Support</Link>
            </div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Press</div>
            <div className="footer-links__link">
              <Link to="#">Blog</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">News</Link>
            </div>
            <div className="footer-links__link">
              <Link to="#">Events</Link>
            </div>
          </div>
        </div>
        <hr className="h-line" />
        <div className="footer-other">
          <div className="footer-other__text">©Copyright 2022 All Rights Are Reserved.</div>
          <div className="footer-other__dot" />
          <div className="footer-other__text">Privacy Policy</div>
          <div className="footer-other__dot" />
          <div className="footer-other__text">Terms of Use</div>
        </div>
      </div>
    </footer>
  );
};
