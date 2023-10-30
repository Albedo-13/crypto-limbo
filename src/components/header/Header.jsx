import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CloseIcon from "@mui/icons-material/Close";

import "./header.scss";
import logo from "../../assets/logo.webp";

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    handleBurgerMenuClickClose();
  }, [location]);

  const renderHeaderLinks = (isHiddenOnMobile) => {
    const styles = classNames({ "header-nav-mobile-hidden": isHiddenOnMobile });
    return (
      <>
        <nav className={`header__links ${styles}`}>
          <ul className="header__list">
            <li>
              <NavLink to="/market" end className={({ isActive }) => classNames("header__link", { active: isActive })}>
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
        <div className={`header__buttons ${styles}`}>
          <Button classes={{ root: "button-header-login" }} component={Link} to="/login">
            Log In
          </Button>
          <Button classes={{ root: "button-header-signup" }} variant="contained" component={Link} to="/signup">
            Sign Up
          </Button>
        </div>
      </>
    );
  };

  const handleBurgerMenuClickOpen = () => {
    setIsBurgerMenuOpen(true);
  };

  const handleBurgerMenuClickClose = () => {
    setIsBurgerMenuOpen(false);
  };

  const headerLinksDesktop = renderHeaderLinks(true);
  const headerLinksMobile = renderHeaderLinks(false);
  const mobileNavStyles = classNames("mobile-nav", { "mobile-nav-active": isBurgerMenuOpen });

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-logo v-line_small">
            <Link to="/" className="header-logo__link">
              <img className="header-logo__img undraggable" src={logo} alt="crypto limbo logo" />
            </Link>
          </div>
          {headerLinksDesktop}
          <div className="header-burger">
            <Button className="mui-button-text_grey4" variant="text" component={Link} to="/signup">
              Sign Up
            </Button>
            <IconButton onClick={handleBurgerMenuClickOpen} aria-label="expand header modal window" size="large">
              <GridViewOutlinedIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </div>
      <aside className={mobileNavStyles} onClick={handleBurgerMenuClickClose}>
        <div className="mobile-nav__wrapper">
          <IconButton
            className="mobile-nav__close"
            onClick={handleBurgerMenuClickClose}
            aria-label="close"
            size="large"
          >
            <CloseIcon />
          </IconButton>
          {headerLinksMobile}
        </div>
      </aside>
    </header>
  );
};
