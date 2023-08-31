import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.webp";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-logo vertical-separator__small">
            <Link to="/" className="header-logo__link">
              <img className="header-logo__img undraggable" src={logo} alt="crypto limbo logo" />
            </Link>
          </div>
          <div className="header__links">
            <Link to="/trade" className="header__link">Market</Link>
            <Link to="#" className="header__link">Road Map</Link>
            <Link to="#" className="header__link">Referral</Link>
          </div>
          <div className="header__buttons">
            <Button>Log In</Button>
            <Button variant="contained">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
