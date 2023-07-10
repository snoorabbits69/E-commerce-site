import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
export const CartItem=(props)=>{
      
    const{id,productName,price,productImage}=props.data;
const {cartItems,addtoCart,removefromCart,updateCartItem,TotalAmount}=useContext(ShopContext)
  
return (

        <div className="cartItem">
           <img src={productImage} className="cartimage"  />
        <div className="descript">
<p>{productName}</p>
<p>${price}</p>
<div className="counthandle">

    <button onClick={()=>{removefromCart(id)}}>-</button>
    <input value={cartItems[id]} className="noofitems" onChange={(e)=>{updateCartItem(Number(e.target.value),id)}}/>
    <button onClick={()=>{addtoCart(id)}}>+</button>
</div>
        </div>
    
        
        </div>
    )
}
