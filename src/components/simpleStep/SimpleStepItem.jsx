import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import NorthEastIcon from "@mui/icons-material/NorthEast";

export const SimpleStepItem = ({ item }) => {
  const { color, icon, title, text, buttonText } = item;
  return (
    <div className="simple-step-item">
      <div className="simple-step-item__icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="simple-step-item__title">{title}</div>
      <div className="simple-step-item__text">{text}</div>
      <Link to={item.link}>
      <Button
        sx={{
          marginTop: "36px",
          fontSize: "16px",
        }}
        endIcon={<NorthEastIcon />}
      >
        {buttonText}
      </Button>
      </Link>
    </div>
  );
};
