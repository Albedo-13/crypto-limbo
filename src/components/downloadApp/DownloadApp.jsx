import { Button } from "@mui/material";

import "./downloadApp.scss";

import downloadAppImg from "../../assets/images/downloadApp.webp";
import appStoreIcon from "../../assets/icons/app-store.svg";
import playMarketIcon from "../../assets/icons/play-market.svg";
import qrCodeIcon from "../../assets/icons/qr-code.svg";

export const DownloadApp = () => {
  return (
    <section className="download-app">
      <div className="container_overflow-hidden">
        <div className="download-app__wrapper">
          <div className="download-app__wrapper-left">
            <h2 className="download-app__title">Never Miss Trading, Download Our Application</h2>
            <p className="download-app__subtitle">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
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
                  }
                }}
                variant="outlined"
                startIcon={<img src={qrCodeIcon} alt="" />}
              ></Button>
            </div>
          </div>
          <div className="download-app__wrapper-right">
            <img className="download-app__img undraggable" src={downloadAppImg} alt="notebook and phone versions" />
            <div className="bg-img-spray download-app__bg-img-spray" />
          </div>
        </div>
      </div>
    </section>
  );
};
