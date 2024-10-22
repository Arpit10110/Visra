import { createAction,createReducer } from "@reduxjs/toolkit";
const addtocart=createAction('addtocart')
export  const Visrareducer=createReducer({
   cart: [],
  },
(builder)=>{
    builder.addCase(addtocart,(state,action)=>{
      const item =action.payload;
      state.cart.push(item);
    })
}) 