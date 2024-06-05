import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
const RestaurantMenu = () => {
    
    const [resInfo, setResInfo] = useState(null)

    return (resInfo === null) ? <Shimmer /> : (
        <div id="restaurantMenu">
            <h1>Name of the restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Bruger</li>
                <li>Fanta</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu