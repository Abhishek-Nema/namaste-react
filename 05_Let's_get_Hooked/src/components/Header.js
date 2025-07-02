import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="image-container" src={LOGO_URL} alt="image not found" />
      </div>
      <div className="navbar-container">
        <ul className="navbar-items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
