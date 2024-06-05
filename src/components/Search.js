import { useState } from "react";

const Search = ({ restaurant, setRestaurant }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div id="search-bar" className="flex items-center space-x-4 p-4 bg-black rounded-lg shadow-lg mt-6 mx-6 w-full">
      <input
        type="text"
        placeholder="Enter here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="flex-grow px-4 py-2 rounded-lg border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-900 text-white"
      />
      <button
        type="submit"
        onClick={() => {
          const filteredList = restaurant.filter((r) =>
            r.info.name.toLowerCase().includes(inputText.toLowerCase())
          );
          console.log(filteredList);
          if (filteredList.length) setRestaurant(filteredList);
        }}
        className="px-4 py-2 rounded-lg bg-blue-400 text-black hover:bg-blue-500 transition duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
