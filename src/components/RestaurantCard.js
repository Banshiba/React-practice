const RestaurantCard = ({ label, ...props }) => {
  const { name, cuisines, avgRating, sla } = props.restaurant.info;
  const { deliveryTime } = sla;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-black shadow-lg mb-6 w-48 relative">
      {label && (
        <label className="absolute top-0 left-0 bg-orange-500 text-black px-1 rounded-sm z-10">
          {label}
        </label>
      )}
      <img
        src="https://png.pngtree.com/png-vector/20200729/ourmid/pngtree-small-restaurant-building-vector-with-flat-design-png-image_2316583.jpg"
        alt=""
        className="rounded-md mb-2 w-full h-24 object-cover"
      />
      <div>
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-gray-400">Cuisines: {cuisines.join(", ")}</p>
        <p className="text-gray-400">Rating: {avgRating}</p>
        <p className="text-gray-400">Estimated Time: {deliveryTime}</p>
      </div>
    </div>
  );
};

export const withBekarLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <RestaurantCard {...props} label="Bekar" />
    );
  };
};

export default RestaurantCard;
