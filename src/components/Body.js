import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {


  const [listOfRestaurants, setRes] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#")
    const json = await data.json()
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const updateRes = (newList) => {
    setFilteredRestaurants(newList)
  }

  return listOfRestaurants.length === 0 ? (
    <div id="RestaurantContainer">
      <Search restaurant={listOfRestaurants} setRestaurant={updateRes} />
      <Shimmer />
    </div>
  ) : (<div id="RestaurantContainer">
    <Search restaurant={listOfRestaurants} filteredRestaurants={filteredRestaurants} setRestaurant={updateRes} />
    {filteredRestaurants.map((filteredRestaurants) => {
      return (<RestaurantCard key={filteredRestaurants?.info?.id} restaurant={filteredRestaurants} />)
    })
    }
  </div>
  );
};


const Body = () => {

  return (
    <div id="body">
      <RestaurantContainer />
    </div>
  );
};

export default Body;