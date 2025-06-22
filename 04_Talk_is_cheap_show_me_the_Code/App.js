import React from "react";
import ReactDOM from "react-dom/client";

/* plannning the wireframe...

- Header
 -- Logo
 -- Nav bar
    
- Body
 -- Search bar
 -- Button (search)
 -- Card container
  --- Food image
  --- Restaurant name 
  --- Star rating
  --- Cuisine
  --- ETA

- Footer
 -- copyright
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-contianer">
        <img
          alt="logo"
          src="https://cdn.vectorstock.com/i/500p/85/91/food-delivery-icon-template-vector-53658591.jpg"
        />
      </div>
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-section">
        <form>
          <input
            className="search-bar"
            type="search"
            placeholder="Enter your dish / restaurant..."
          ></input>
          <button className="search-button">Search</button>
        </form>
      </div>

      <div className="card-container">
        <div className="card-img">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/611f45a5-52b7-4ad0-84d7-f605643f46ea_10892.JPG" />
        </div>
        <div className="restaurant-details">
          <h3>Pizza Hut</h3>
          <h4>4 star</h4>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
