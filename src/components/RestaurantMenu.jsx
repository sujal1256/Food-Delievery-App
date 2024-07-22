import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const json = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.67400&lng=76.72490&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await json.json();
    setMenu(data?.data?.cards.slice(2));
  }

  return menu.length != 0 ? (
    <>
      <div className="flex flex-col justify-center align-middle w-[60%] mt-14 p-3 rounded-2xl mx-auto">
        <p className="text-4xl font-bold mb-6 w-full text-left ">
          {menu[0]?.card?.card?.info?.name}
        </p>
        <div className="border py-3 pl-2 rounded-xl shadow">
          <div className="font-bold flex gap-4">
            <p className="flex justify-center align-middle py-1">
              ⭐{menu[0]?.card?.card?.info?.avgRating} (
              {menu[0]?.card?.card?.info?.totalRatingsString})
            </p>
            <p className="flex justify-center align-middle py-1">
              {menu[0]?.card?.card?.info?.costForTwoMessage}
            </p>
          </div>
          <p className="pl-5 ">
            {menu[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <ul className="ml-9 list-disc mt-4">
            <li className="my-1">
              <span className="font-bold">Outlet:</span>{" "}
              {menu[0]?.card?.card?.info?.locality}
            </li>
            <li>
              {menu[0]?.card?.card?.info?.sla?.slaString.slice(0, -4) +
                menu[0]?.card?.card?.info?.sla?.slaString
                  .slice(-4)
                  .toLowerCase()}
            </li>
          </ul>
          {menu[0]?.card?.card?.info?.expectationNotifiers && (
            <>
              <hr className=" border-dotted border-b-[0.1px] mt-2 mb-1" />
              <div className="flex gap-3 text-sm">
                <img
                  src={
                    IMAGE_URL +
                    menu[0]?.card?.card?.info?.expectationNotifiers?.[0]?.icon
                      ?.imageId
                  }
                  alt="image"
                  className="deli-image w-5 bg-blend-multiply"
                />
                <p>
                  {menu[0]?.card?.card?.info?.expectationNotifiers?.[0]?.text.slice(
                    3,
                    10
                  )}{" "}
                  |{" "}
                  {menu[0]?.card?.card?.info?.expectationNotifiers?.[0]?.text.slice(
                    16
                  )}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="">
        <p className=" py-2 text-4xl text-center text-orange-500 mb-5">Menu</p>

        <div>
          {menu
            .slice(-1)?.[0]
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.itemCards != undefined)
            .map((e, index) => {
             return <MenuCard {...e} key={index}/>;
            })}
        </div>  
      </div>
    </>
  ) : null;
};
export default RestaurantMenu;
