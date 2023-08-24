import { Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

// TODO: BG COLOR AND SPRAY

export const StartTradingItem = ({ item }) => {
  const { color, icon, title, text, buttonText } = item;
  return (
    <div className="start-trading-item">
      <div className="start-trading-item__icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="start-trading-item__title">{title}</div>
      <div className="start-trading-item__text">{text}</div>
      <Button
        sx={{
          marginTop: "36px",
          fontSize: "16px",
        }}
        endIcon={<NorthEastIcon />}
      >
        {buttonText}
      </Button>
    </div>
  );
};
