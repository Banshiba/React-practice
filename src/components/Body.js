import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../data";

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

  export default Body;