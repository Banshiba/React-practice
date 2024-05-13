import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("Login")
    return (
      <div id="header">
        <div id="logo-container">
          <img
            src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"
            alt=""
          />
        </div>
        <div id="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <li onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }}>{login}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;