import { Button } from "@mui/material";

import "./downloadApp.scss";

import downloadAppImg from "../../assets/images/downloadApp.webp";
import appStoreIcon from "../../assets/icons/mobile-stores/app-store.svg";
import playMarketIcon from "../../assets/icons/mobile-stores/play-market.svg";
import qrCodeIcon from "../../assets/icons/mobile-stores/qr-code.svg";

export const DownloadApp = () => {
  return (
    <section className="download-app">
      <div className="container_overflow-hidden">
        <div className="download-app__wrapper">
          <div className="download-app__wrapper-left">
            <h2 className="download-app__title">Never Miss Trading, Download Our Application</h2>
            <p className="download-app__subtitle">
              Are you want to make smart investment choices? Our mobile app provides analysis to help you navigate the
              ever-changing crypto market. Stay ahead of the game, download our application for real-time updates, and
              never miss a trading opportunity again. Don't wait, try now and start maximizing your profits!
            </p>
            <div className="download-app__buttons">
              <Button
                sx={{
                  width: 180,
                  marginRight: "30px",
                  fontSize: "18px",
                }}
                variant="outlined"
                startIcon={<img src={appStoreIcon} alt="" />}
              >
                App Store
              </Button>
              <Button
                sx={{
                  width: 180,
                  marginRight: "30px",
                  fontSize: "18px",
                }}
                variant="outlined"
                startIcon={<img src={playMarketIcon} alt="" />}
              >
                Play Store
              </Button>
              <Button
                sx={{
                  width: 80,
                  span: {
                    margin: "0 auto",
                  },
                }}
                variant="outlined"
                startIcon={<img src={qrCodeIcon} alt="" />}
              ></Button>
            </div>
          </div>
          <div className="download-app__wrapper-right">
            <img className="download-app__img undraggable" src={downloadAppImg} alt="notebook and phone versions" />
            <div className="bg-img-spray_wide" />
          </div>
        </div>
      </div>
    </section>
  );
};
