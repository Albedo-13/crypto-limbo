import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

import "./header.scss";
import logo from "../../assets/logo.webp";

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const renderHeaderLinks = () => {
    return (
      <>
      
      </>
    );
  }

  const renderHeaderOverlay_maybedontneedimtootiredtothink = () => {
    return (
      <>
      
      </>
    );
  }

  const handleBurgerMenuClickOpen = () => {
    setIsBurgerMenuOpen(true);
  }
  
  return (
    <header className="header">
      <div className="container">
        {/* <div className="header-">
          
        </div> */}
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
                  className={({ isActive }) => classNames("header__link", { active: isActive })}
                >
                  Market
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/road-map"
                  end
                  className={({ isActive }) => classNames("header__link", { active: isActive })}
                >
                  Road Map
                </NavLink>
              </li>
              <li>
                <NavLink to="/referral" className="header__link">
                  Referral
                </NavLink>
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
          <div className="header-burger">
            <Button className="mui-button-text_grey4" variant="text" component={Link} to="#">
              Sign Up
            </Button>
            <IconButton onClick={handleBurgerMenuClickOpen} aria-label="expand" size="large">
              <GridViewOutlinedIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};
