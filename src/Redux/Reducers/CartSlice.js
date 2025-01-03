import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"Product",
    initialState:{
        product:[],
        totals:{},
        quantity:1
    },
    reducers:{
        saveProduct:(state,action)=>{
           // console.log(state,action)
           return {
            ...state,
            product:action.payload
           }
        },
         handlechange:(state,action)=>{
          // console.log(action);
           const{quantity,id}=action.payload;


         //Find the matching product
        const matchingProduct =state.product.find((item) => item.id === id);
      //  console.log(matchingProduct)
        if(!matchingProduct){
            console.log("Product Not Found");
            return state;
        }
        //calculate subtotal
        const subTotal = quantity * matchingProduct.price;
       
        //calculate the shipping cost
        const shippingCost = typeof matchingProduct.shipping === "number" && Number.isFinite(matchingProduct.shipping)
            ? matchingProduct.shipping : 0;

            //calculate total
        const Total = shippingCost + subTotal;

        //update result individual id product
       
        state.totals[id]={subTotal,Total,quantity}
     
        }, 
        handleRemove:(state,action)=>{
           // console.log(state,action)
             return{
                ...state,
              product:state.product.filter((item) => item.id !== action.payload)
            } 
            
        } 
       }
});
export const {saveProduct,handlechange,handleRemove}= CartSlice.actions;
export default CartSlice.reducer;
