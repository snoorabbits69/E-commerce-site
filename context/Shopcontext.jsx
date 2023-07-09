import  { createContext,useState } from "react";
import {Products} from "../Product/Products"
export const ShopContext=createContext();
export const ShopContextProvider=(props)=>{
    

    const getDefaultCart=()=>{
        let cart={};

        for(let i=1;i<=Products.length+1;i++)
        {
            cart[i]=0;
        }
        return cart;
    }
    const [cartItems,setCartItems]=useState(getDefaultCart());
const addtoCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

}
const removefromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const updateCartItem=(newamount,itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:newamount}));
}

let total=0;
const TotalAmount=()=>{

for(const i in cartItems){
    if(cartItems[i]>0){
 let iteminfo=Products.find((product)=>product.id===Number(i))

 total+=cartItems[i]*iteminfo.price;    
}
 }
return total/2;
}

const contextValue={
    cartItems,addtoCart,removefromCart,updateCartItem,TotalAmount
}

    return (
        <ShopContext.Provider value={contextValue}>
{props.children}

        </ShopContext.Provider>
    )  
    }
    
    