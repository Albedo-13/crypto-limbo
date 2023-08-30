import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <Link to="/" className="header-logo__link">
              <img className="footer-logo__img" src={logo} alt="footer logo" />
            </Link>
          </div>
          <div className="footer-socials">
            <Link target="_blank" to="https://discord.com/" className="footer-social__link" >
              <img src={discordIcon} alt="discord link" />
            </Link>
            <Link target="_blank" to="https://telegram.org/" className="footer-social__link" >
              <img src={telegramIcon} alt="telegram link" />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/" className="footer-social__link" >
              <img src={instagramIcon} alt="instagram link" />
            </Link>
            <Link target="_blank" to="" className="footer-social__link" >
              <img src={linkedinIcon} alt="linkedin link" />
            </Link>
            <Link target="_blank" to="" className="footer-social__link" >
              <img src={youtubeIcon} alt="youtube link" />
            </Link>
          </div>
        </div>
        <hr className="horizontal-separator mt-51px" />
        <div className="footer-links">
          <div className="footer-links__block">
            <div className="footer-links__label">Crypto Brains</div>
            <div className="footer-links__link"><Link to="#">About us</Link></div>
            <div className="footer-links__link"><Link to="#">Our Team</Link></div>
            <div className="footer-links__link"><Link to="#">Road Map</Link></div>
            <div className="footer-links__link"><Link to="#">Risk Disclosure</Link></div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Knowledge</div>
            <div className="footer-links__link"><HashLink to="/#FrequentlyAskedQuestions" className="footer-links__link">F.A.Q.</HashLink></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Articals</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Video Tutorial</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Beginner's Guide</Link></div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Services</div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">API Service</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Token Listing</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">API Document</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Ticket Services</Link></div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Exchange</div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">P2P</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Referral</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Markets</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Affiliate Program</Link></div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Support Service</div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Career</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Community</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Customer Chat</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Technical Support</Link></div>
          </div>
          <div className="footer-links__block">
            <div className="footer-links__label">Press</div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Blog</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">News</Link></div>
            <div className="footer-links__link"><Link to="#" className="footer-links__link">Events</Link></div>
          </div>
        </div>
        <hr className="horizontal-separator" />
      </div>
    </footer>
  );
};
