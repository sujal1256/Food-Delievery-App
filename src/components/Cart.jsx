import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    return(
        <div className="">
            <h1 className="text-3xl text-center font-bold">Cart Items</h1>
            <div className="w-[50%] mx-auto">
                {cartItems.map((item) => <CartItem {...item} key={item.id}/>)}
            </div>


        </div>
    )
}
export default Cart;