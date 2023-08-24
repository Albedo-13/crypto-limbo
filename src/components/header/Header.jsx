import Button from '@mui/material/Button';

import logo from "../../assets/logo.webp";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-logo vertical-separator__small">
            <a className="header-logo__link" href="#">
              <img className="header-logo__img undraggable" src={logo} alt="crypto limbo logo" />
            </a>
          </div>
          <div className="header__links">
            <a className="header__link" href="#">Market</a>
            <a className="header__link" href="#">Ipsum</a>
            <a className="header__link" href="#">Lorem</a>
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
