import { createContext } from "react";


// The context is being modified dynamically in App.js
const UserContext=createContext({
    user:{
        name:"-----",
        email:"----"
    }
})

UserContext.displayName = "UserContext";
export default UserContext;