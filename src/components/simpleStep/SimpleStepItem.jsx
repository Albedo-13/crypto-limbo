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
      <p className="simple-step-item__title">{title}</p>
      <p className="simple-step-item__text">{text}</p>
      <Button
        sx={{
          marginTop: "36px",
          fontSize: "16px",
        }}
        endIcon={<NorthEastIcon />}
        component={Link}
        to={item.link}
      >
        {buttonText}
      </Button>
    </div>
  );
};
