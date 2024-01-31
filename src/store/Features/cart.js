import {  createSlice } from "@reduxjs/toolkit";

import { Item } from "../../Item";

const addCart=createSlice({
    name: "cart",
    initialState:{
        cartItems: [],
        subTotal:0,
        home_delivery:2,
        loading: false,
        error: "",
    },
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload
            const existItem = state.cartItems.find((i)=>i.id === item.id)
           
            if(existItem){
                state.cartItems.forEach((i)=>{
                    if(i.id===item.id) {
                        i.qty+=1
                    }

                })
            }
            else{
                state.cartItems.push(item)
            }
      

        },

        increment:(state,action)=>{
            const item=action.payload
            state.cartItems.forEach((i)=>{
              if(i.id===item.id){
                i.qty+=1
              }
      
            })
          },
          decreament:(state,action)=>{
            const item=action.payload
            state.cartItems.forEach((i)=>{
                if(i.id===item.id){
                    i.qty==0?i.qty=0:i.qty-=1
                }
            })

          },
          DeleteProduct:(state,action)=>{
            const item=action.payload
            state.cartItems=state.cartItems.filter((i)=> i.id!=item.id)
          },
          totalPrice:(state)=>{
            state.subTotal = state.cartItems.reduce((accu,i)=>{ return(accu+=i.price*i.qty)},0)
          },

    }
})
export const {addToCart,increment,decreament,DeleteProduct,totalPrice}=addCart.actions;
export default addCart.reducer;