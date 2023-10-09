import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

import "./header.scss";
import logo from "../../assets/logo.webp";
import classNames from "classnames";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-logo v-line_small">
            <Link to="/" className="header-logo__link">
              <img className="header-logo__img undraggable" src={logo} alt="crypto limbo logo" />
            </Link>
          </div>
          <nav className="header__links">
            <ul className="header__list">
              <li>
                <NavLink
                  to="/market"
                  end
                  className={({ isActive }) => (classNames("header__link", {"active": isActive}))}
                >
                  Market
                </NavLink>
              </li>
              <li>
                <Link to="#" className="header__link">
                  Road Map
                </Link>
              </li>
              <li>
                <Link to="#" className="header__link">
                  Referral
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__buttons">
            <Button classes={{ root: "button-header-login" }} component={Link} to="/login">
              Log In
            </Button>
            <Button classes={{ root: "button-header-signup" }} variant="contained" component={Link} to="/signup">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
