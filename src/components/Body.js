import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../mockData";

const Body = () => {

    // const [restaurantData, setRestaurantData] = useState(restaurantList);
    const [filterData, setFilterData] = useState(restaurantList);
    const [filterText, setFilterText] = useState("");


    const filterDataHandler = () => {
        let filteredData = restaurantList.filter(rest => rest.data.avgRating > 4);
        setFilterData(filteredData);
    }

    const searchButtonHandler = () => {
        let filteredData = restaurantList.filter(item => item.data.name.toLowerCase().includes(filterText.toLowerCase()));
        setFilterData(filteredData);
    }

    useEffect(()=>{
        const apiData = fetch("https://www.swiggy.com/dapi/restaurants/list/update");
        console.log("apiData",apiData);
        

    },[])



    return (
        <div className="body">
            <input className="input-search-box" onChange={(e) => setFilterText(e.target.value)} value={filterText}></input>
            <button className="search-btn" onClick={searchButtonHandler}>Search</button>
            <button className="filter-btn" onClick={filterDataHandler}>Filter Restaurants</button>
            <div className="res-container">
                {filterData.map(item => (
                    <RestaurantCard id={item?.data?.id} name={item?.data?.name} dishes={(item?.data?.cuisines).join(",")} ratings={item?.data?.avgRating} time={item?.data?.slaString} />
                ))}
            </div>
        </div>
    )
}

export default Body;