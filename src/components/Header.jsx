import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
export const Title = () => {
    const {user} = useContext(UserContext);

    return(
    <Link to="/">
      <img
        className="h-14"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s"
      />
    </Link>
)};

  
const Header = () => {
    const [isLoggedIn,setLoggedIn] = useState(false);
    const isOnline = useOnline();

// useEffect(()=>{
    // console.log('useEffect');
// },[])

// console.log('render');

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
        <Link to="/">
            <li>Cart</li>
        </Link>
        <Link to="/instamart">
            <li>Instamart</li>
        </Link>
            <li><h1>{isOnline?'✅':'🔴'}</h1></li>
        </ul>
    </div>
    {!isLoggedIn  && <button onClick={()=>setLoggedIn(true)}>Login</button>}
    {   isLoggedIn && <button onClick={()=>setLoggedIn(false)}>Logout</button>}

    </div>
);
};

export default Header;