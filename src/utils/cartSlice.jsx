import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    // reducer function to modify the cart
    reducers:{
        addItem:(state, action)=>{
            // state is the initial state
            // action is the data which is comming
            
            state.items.push(action.payload);

        },
        removeItem:(state,action)=>{
            // FIXME:
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items = []
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
// Here it is reducer because it will combine all the reducer functions and export it as 1
export default cartSlice.reducer;