import { IMAGE_URL } from "../constants";

const ResturantCard = ({info}) => {
  
  const { name, cloudinaryImageId, cuisines, avgRating} = info;
    return (
      <div className="">
        <img
          src={IMAGE_URL+ cloudinaryImageId}
          alt="food-item"
          className="w-full block overflow-hidden h-48 bg-cover rounded-2xl"
        />
        <div className="pl-2">
          <h2 className="text-2xl w-[300%]">{name}</h2>
          <h3 className="text-slate-400 font-normal text-md">{cuisines.slice(0,3).join(', ')}</h3>
          <h3 className="text-slate-400 font-normal text-md">{avgRating}⭐</h3>
          {/* <h3 className="rest-place">{place}</h3> */}
        </div>
      </div>
    );
  };
export default ResturantCard;  