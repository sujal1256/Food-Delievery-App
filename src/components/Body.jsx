import ResturantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import NoResults from "./NoResults";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { ALL_RESTAURANTS_URL } from "../constants";
import useFetch from "../utils/useFetch";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // Search functionality
  useEffect(() => {
    (async function () {
      const data = await useFetch(ALL_RESTAURANTS_URL);
      const rests =
        data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setFilteredRestaurants(rests);
      setAllRestaurants(rests);
      console.log(data);
      
    })();
  }, []);
  
  // We have used all restaurants here because we want to show our shimmer only when all restaurants are 0 filtered can be 0 on base of serches
  if (!useOnline()) {
    return <Offline />;
  }
  if(!allRestaurants){
    return;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container justify-center py-2 flex gap-3 w-full">
        <input
          type="text"
          className="search-bar"
          value={searchText}
          data-testid = "search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          data-testid = "search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants.length === 0 ? (
        <NoResults />
      ) : (
        <div className="restaurant-cards bg-slate-50 flex flex-wrap gap-12 m-10 w-auto justify-around" data-testid="res-data">
          {filteredRestaurants.map((e) => {
            return (
              <Link
                to={"/restaurant/" + e.info?.id}
                key={e.info.id}
                className="card w-52 rounded-md h-80 flex flex-col overflow-hidden cursor-pointer ease-linear transition-transform hover:scale-[1.1]"
              >
                <ResturantCard {...e} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
