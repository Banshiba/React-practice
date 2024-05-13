const shimmerCards = () => {
    const style = {
        visibility: 'hidden',
    }
    return ( <div  id="blinking-div">
      <img
        id="restauruantImage"
      />
      <div id="restuarantInfo">
        <p style={style}>  .  </p>
        <p style={style}>  .  </p>
        <p style={style}>  .  </p>
      </div>
    </div>)
}

const Shimmer = () => {
    const render =[]
    for(let i = 0; i<20; i++) {
    render.push(shimmerCards())
   }
   return (<div id="RestaurantContainer">
    {render}
   </div>
);
}

export default Shimmer;
