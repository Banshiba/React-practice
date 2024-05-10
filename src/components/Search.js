const Search = () => {
  return (
    <div id="search-bar">
      <input type="text" placeholder="Enter here" />
      <button type="submit" onClick={() => {console.log("Button clicked")}}>Filter</button>
    </div>
  );
};

export default Search;
