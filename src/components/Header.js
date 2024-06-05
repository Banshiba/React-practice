import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg rounded-md mt-6 mx-6">
      <div className="logo-container">
        <img
          className="h-16 w-16 rounded-full shadow-lg"
          src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex items-center space-x-6 text-lg">
          <li>
            <Link
              to="/"
              className="text-blue-400 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:text-black hover:scale-105 neon-effect"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-400 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:text-black hover:scale-105 neon-effect"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-blue-400 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:text-black hover:scale-105 neon-effect"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-blue-400 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:text-black hover:scale-105 neon-effect"
            >
              Cart
            </Link>
          </li>
          <li
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
            className="cursor-pointer text-blue-400 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-400 hover:text-black hover:scale-105 neon-effect"
          >
            {login}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
