import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__wrapper">
          <div className="header-logo vertical-separator__small">
            <Link to="/" className="header-logo__link">
              <img className="header-logo__img undraggable" src="/assets/logo.webp" alt="crypto limbo logo" />
            </Link>
          </div>
          <div className="header__links">
            <NavLink to="/market" end className={({ isActive }) => (isActive ? "header__link_active" : "header__link")}>
              Market
            </NavLink>
            <Link to="#" className="header__link">
              Road Map
            </Link>
            <Link to="#" className="header__link">
              Referral
            </Link>
          </div>
          <div className="header__buttons">
            <Button classes={{ root: "button-header-login" }} component={Link} to="/login">
              Log In
            </Button>
            <Button classes={{ root: "button-header-signup" }} variant="contained" component={Link} to="/signup">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
