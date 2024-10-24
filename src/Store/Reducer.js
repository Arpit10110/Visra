'use client'
import { createAction,createReducer } from "@reduxjs/toolkit";
const addtocart=createAction('addtocart')
export  const Visrareducer=createReducer({
   cart: localStorage.getItem("Visracart") ? JSON.parse(localStorage.getItem("Visracart")) :[],
  },
(builder)=>{
    builder.addCase(addtocart,(state,action)=>{
      const item =action.payload;
      state.cart=[];
      state.cart.push(item);
      localStorage.setItem("Visracart", JSON.stringify(state.cart));
    })
}) 