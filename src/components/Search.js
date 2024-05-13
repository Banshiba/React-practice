import { useState } from "react";

const Search = ({ restaurant, setRestaurant }) => {
  const [inputText, setInputText] = useState("")
  return (
    <div id="search-bar">
      <input type="text" placeholder="Enter here" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button type="submit" onClick={() => {
        const filteredList = restaurant.filter((r) => (r.info.name.toLowerCase().includes(inputText.toLowerCase())))
        console.log(filteredList)
        if(filteredList.length) setRestaurant(filteredList)
      }
      }>Search</button>
    </div>
  );
};

export default Search;
