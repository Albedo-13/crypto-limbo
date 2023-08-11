import Button from '@mui/material/Button';

import logo from "../../assets/logo.png";
import "./header.scss";

import variables from "../../styles/_variables.scss";
import { convertScssToObject } from '../../utils/scssConverter';

export const Header = () => {
  const colors = convertScssToObject(variables);
  console.log(colors);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header-logo">
            <a className="header-logo__link" href="#">
              <img className="header-logo__img" src={logo} alt="crypto limbo logo" />
            </a>
          </div>
          <div className="header__links">
            <a className="header__link" href="#">Market</a>
            <a className="header__link" href="#">Ipsum</a>
            <a className="header__link" href="#">Lorem</a>
          </div>
          <div className="header__buttons">
            <Button sx={{
              // color: "#ff0000",
              color: colors.error,
            }}>log in</Button>
            <Button variant="contained">sign up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
