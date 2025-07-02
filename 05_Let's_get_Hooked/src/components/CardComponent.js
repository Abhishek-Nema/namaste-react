import { CDN_URL } from "../utils/constants";

const CardComponent = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    resData?.info || {};

  return (
    <div className="card-component" style={{ backgroundColor: "#d3D3D3" }}>
      <div className="card-image-container">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="card-detail">
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{sla?.slaString}</h4>
        <p>{cuisines?.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default CardComponent;
