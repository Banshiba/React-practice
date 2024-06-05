import Search from "./Search";
import RestaurantCard, {withBekarLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import useCheckOnline from "./utils/useCheckOnline";
import Shimmer from "./Shimmer";


const RestaurantContainer = () => {
  const [listOfRestaurants, setRes] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardWithBekar = withBekarLabel(RestaurantCard)

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    setRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listOfRestaurants)

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateRes = (newList) => {
    setFilteredRestaurants(newList);
  };

  const onlineStatus = useCheckOnline();

  if (onlineStatus === false) return <h1>Oops. Looks like you are Offline</h1>;

  return listOfRestaurants.length === 0 ? (
    <div id="RestaurantContainer" className="mt-6 flex flex-wrap gap-6">
      <Search restaurant={listOfRestaurants} setRestaurant={updateRes}/>
      <Shimmer />
    </div>
  ) : (
    <div id="RestaurantContainer" className="mt-6 flex flex-wrap gap-6 mx-2">
      <Search
        restaurant={listOfRestaurants}
        filteredRestaurants={filteredRestaurants}
        setRestaurant={updateRes}
      />
      {filteredRestaurants.map((restaurant) => (
        restaurant?.info?.sla?.deliveryTime > 34? (<RestaurantCardWithBekar key={restaurant?.info?.id} restaurant={restaurant} label="Bekar"/>) : (<RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />)
      ))}
    </div>
  );
};

export default RestaurantContainer;
