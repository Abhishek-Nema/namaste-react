import CardComponent from "./CardComponent";
import restaurantDataArray from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* Search area of body */}
      <div className="search-container">
        <div>
          <input
            className="searchField-container"
            type="search"
            placeholder="Enter your food/restaurant"
          ></input>
        </div>
        <div>
          <button className="searchButton-container">Search</button>
        </div>
      </div>

      {/* Card container area of body */}
      <div className="card-container-area">
        {restaurantDataArray.map((resName) => (
          <CardComponent key={resName.info.id} resData={resName} />
        ))}
      </div>
    </div>
  );
};

export default Body;
