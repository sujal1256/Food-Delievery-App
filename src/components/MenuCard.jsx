import { useState } from "react";
import FoodCard from "./FoodCard";
import { DOWN_ARROW, UP_ARROW } from "../constants";

const MenuCard = ({ card }) => {
    const [closed,setClosed] = useState(true)
  const title = card?.card?.title;
  const itemCards = card?.card?.itemCards?.map((e) => e?.card?.info);
  // console.log(itemCards);
  return (
    <>
      <div className="w-[60%] mx-auto">
        <div className="bg-gray-100 p-4 text-xl font-bold my-2 flex justify-between rounded-lg" onClick={()=>setClosed(!closed)}>
          <h1>
            {title}({itemCards.length})
          </h1>
          {/* down arrow */}
         {closed && DOWN_ARROW}

          {/* up arrow */}
          {!closed && UP_ARROW}
        </div>
        <div className={` ${closed?"hidden":null}`}>
            {itemCards.map((e) => { 
                return <FoodCard {...e} key={e.id} />;
            })}
        </div>
      </div>
      {/* <div className=" bg-gray-100 w-[5%] h-5  mx-auto"></div> */}
    </>
  );
};
export default MenuCard;
