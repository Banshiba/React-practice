import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./data";

// Header
//  - Logo
//  - Nav items
// Body
//  - Search
//  - restuarant container
//  - restuarant card
// Footer
//  - copyrights
//  - links
//  - address
//  - contact

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div id="search-bar">
      <input type="text" placeholder="Enter here" />
      <button type="submit">Search</button>
    </div>
  );
};

const RestaurantCard = (props) => {

    const { name, cuisines, avgRating, sla,id  } = props.restaurant.info
    const { deliveryTime } = sla

  return (
    <div id="card">
      <img
        src="https://png.pngtree.com/png-vector/20200729/ourmid/pngtree-small-restaurant-building-vector-with-flat-design-png-image_2316583.jpg"
        alt=""
        id="restauruantImage"
      />
      <div id="restuarantInfo">
        <p id="restaurantName">{name}</p>
        <p>Cuisines: {cuisines.join(", " ).trim()}</p>
        <p id="stars">Rating: {avgRating}</p>
        <p id="time">Estimated Time: {deliveryTime}</p>
      </div>
    </div>
  );
};

const RestaurantContainer = () => {
  return ( <div id="RestaurantContainer">
  {
    restaurants.map((restaurant) => {
        return ( <RestaurantCard  key={restaurant.info.id} restaurant = {restaurant} />)
    })
  }
    </div>
  );
};

const Body = () => {
  return (
    <div id="body">
      <Search />
      <RestaurantContainer />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
