import "./roadMap.scss";
import Skeleton from "@mui/material/Skeleton";

export const RoadMap = () => {
  return (
    <section className="roadmap">
      <div className="container">
        RoadMap
        <Skeleton variant="rounded" width={"100%"} height={61} animation="wave" />
      </div>
    </section>
  );
};
