import React from "react";
import { Products } from "./Products";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
export const Product=(props)=>{
    const {addtoCart,removefromCart,cartItems}=useContext(ShopContext);
    const{id,productName,price,productImage}=props.data;
    

    

    const cartamount=cartItems[id];
  
    return(
        <div className="product" >
            
        <img src={productImage}  className="productimage"/>
        <div className="description">
<p>{productName}</p>
<p>${price}</p>
        </div>
        <button className="addtocart" onClick={()=>{addtoCart(id)}}>Add To Cart({cartamount>0 &&<>{cartamount}</>})</button>
        </div>)

    
}