import { useState } from "react";
import FoodCard from "./FoodCard";

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
         {closed && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 stroke-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>}

          {/* up arrow */}
          {!closed && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 stroke-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>}
        </div>
        <div className={`${closed?"hidden":null}`}>
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
