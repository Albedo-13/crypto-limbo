import { withEntry } from "./withEntry";

import "./entry.scss";

// TODO?: modules or new pages with header? https://mui.com/material-ui/react-modal/
// TODO: split diff entries to files (entry folder => entry, withEntry?, login, signup etc)
// TODO: routing between forms

export const Entry = ({ component }) => {
  const FormEntry = withEntry(component);

  return (
    <div className="entry">
      <div className="container">
        <div className="entry__wrapper">
          <FormEntry />
          <div className="entry__wrapper-right">
            <img className="entry__image undraggable" src="/assets/images/CurlyManWithLaptop.webp" alt="guy with notebook" />
          </div>
        </div>
        <div className="entry__copyright">©Copyright 2022 All Rights Are Reserved.</div>
      </div>
    </div>
  );
};
