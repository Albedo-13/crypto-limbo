import { withEntry } from "./withEntry";

import "./login.scss";

import guyWithNotebook from "../../assets/images/CurlyManWithLaptop.webp";

// TODO?: HOC? (same component layout)
// TODO?: modules or new pages with header? https://mui.com/material-ui/react-modal/
// TODO: split diff entries to files (entry folder => entry, withEntry?, login, signup etc)
// TODO?: rename 'login' css styles to 'entry'?
// TODO: routing between forms

export const Entry = ({ component }) => {
  const FormEntry = withEntry(component);

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <FormEntry />
          <div className="login__wrapper-right">
            <img className="login__image undraggable" src={guyWithNotebook} alt="guy with notebook" />
          </div>
        </div>
        <div className="login__copyright">©Copyright 2022 All Rights Are Reserved.</div>
      </div>
    </div>
  );
};
