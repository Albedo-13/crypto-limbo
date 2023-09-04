import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./downloadApp.scss";

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
                startIcon={<img src="/assets/icons/mobile-stores/app-store.svg" alt="app store" />}
                component={Link}
                to="https://www.apple.com/"
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
                startIcon={<img src="/assets/icons/mobile-stores/play-market.svg" alt="play market" />}
                component={Link}
                to="https://play.google.com/"
              >
                Play Store
              </Button>
              <Button
                aria-label="qr scan"
                sx={{
                  width: 80,
                  span: {
                    margin: "0 auto",
                  },
                }}
                variant="outlined"
                startIcon={<img src="/assets/icons/mobile-stores/qr-code.svg" alt="qr code" />}
                component={Link}
                to="https://play.google.com/store/apps/details/Free_QR_Scanner_Bar_Code_Scanner_QR_Code_Reader?id=app.qrcode&hl=en_GB"
              ></Button>
            </div>
          </div>
          <div className="download-app__wrapper-right">
            <img className="download-app__img undraggable" src="/assets/images/downloadApp.webp" alt="notebook and phone versions" />
            <div className="bg-img-spray_wide" />
          </div>
        </div>
      </div>
    </section>
  );
};
