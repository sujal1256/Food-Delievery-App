import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { CART } from "../constants";
export const Title = () => {
  const { user } = useContext(UserContext);

  return (
    <Link to="/">
      <img
        className="h-14"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(...cartItems);

  return (
    <div className="flex justify-between items-center bg-white px-[20px] py-[10px]">
      <Title />
      <div className="nav-items w-[30%]">
        <ul className="w-full flex gap-3 justify-evenly items-center text-xl ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <li>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
          </li>
        </ul>
      </div>
      <div className="flex w-28 justify-between">
        {!isLoggedIn && (
          <button onClick={() => setLoggedIn(true)} className="bg-gray-200">
            Login
          </button>
        )}
        {isLoggedIn && (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        )}
        <Link to="/cart" className="flex w-[30%] justify-between">
          <span>{CART}</span>
          <span>{cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
