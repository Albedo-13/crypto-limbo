import { withEntry } from "./withEntry";

import "./entry.scss";

export const Entry = ({ component }) => {
  const FormEntry = withEntry(component);

  return (
    <div className="entry">
      <div className="container">
        <div className="entry__wrapper">
          <div className="entry__wrapper-left">
            <FormEntry />
          </div>
          <div className="entry__wrapper-right">
            <img
              className="entry__image undraggable"
              src="/assets/images/CurlyManWithLaptop.webp"
              alt="guy with notebook"
            />
          </div>
        </div>
        <div className="entry__copyright">©Copyright 2022 All Rights Are Reserved.</div>
      </div>
    </div>
  );
};
