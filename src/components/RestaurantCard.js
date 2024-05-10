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

export default RestaurantCard;