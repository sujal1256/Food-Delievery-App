import { IMAGE_URL } from "../constants";

const FoodCard = ({ name, imageId, price, isVeg, ratings }) => {
  const src = isVeg
    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
    : "https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg";

    const rating = ratings?.aggregatedRating?.rating;
  return (
    <>
      <div className=" bg-white shadow-sm rounded-lg flex px-10 justify-between h-32 items-center my-2 relative py-20">
        {/* text box */}
        <div>
          <img src={src} alt="" className="w-4 h-4" />
          <p className="text-lg font-semibold text-gray-600">{name}</p>
          <p className="font-semibold text-lg">₹{price / 100}</p>
         {rating && <p className="flex justify-start items-center gap-0.5 text-green-70 font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 stroke-none fill-green-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            {rating}
          </p>}
        </div>
        <div className="mb-[20px] overflow-hidden rounded-xl">
          {imageId && (
            <img
              src={IMAGE_URL + imageId}
              alt=""
              className="w-32 h-32 block object-cover scale-110"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
