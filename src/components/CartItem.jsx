import { useDispatch } from "react-redux";
import { IMAGE_URL, STAR } from "../constants";
import { clearCart } from "../utils/cartSlice";

const CartItem = ( { name, imageId, price, isVeg, ratings,id }) => {
  const src = isVeg
    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
    : "https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg";

  const rating = ratings?.aggregatedRating?.rating;
  const dispatch = useDispatch();
  
  const handleDelete = () =>{
    dispatch(clearCart());
  }

  return (
    <>
      <div className=" bg-white shadow-sm rounded-lg flex px-10 justify-between h-32 items-center my-2 relative py-20">
        {/* text box */}
        <div>
          <img src={src} alt="" className="w-4 h-4" />
          <p className="text-lg font-semibold text-gray-600">{name}</p>
          {price && <p className="font-semibold text-lg">₹{price / 100}</p>}
          {rating && (
            <p className="flex justify-start items-center gap-0.5 text-green-70 font-semibold text-sm">
              {STAR}
              {rating}
            </p>
          )}
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
        <button className="absolute bottom-2 right-16 bg-orange-500 px-2 rounded-md hover:bg-orange-300" onClick={()=>handleDelete()}>Delete Item</button>
      </div>
    </>
  );
};

export default CartItem;
