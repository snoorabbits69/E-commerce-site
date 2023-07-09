import { useContext } from "react";
import { Product } from "../Product/Product";
import { Products } from "../Product/Products";
import { ShopContext } from "../context/Shopcontext";
import {CartItem} from "../pages/CartItem"
import {useNavigate} from "react-router-dom"
export const Cart=()=>{
    const goHome=useNavigate();
    const {cartItems,TotalAmount}=useContext(ShopContext);
    let Total=TotalAmount();
return(<div className="cart">
    <div>
        <h1>Your Cart Items</h1>
    </div>
   <div className="cartItems">
        {Products.map((product)=>{
if(cartItems[product.id]!==0){
    return<CartItem data={product}/>
}
        })}
    </div>
    
    
    {Total>0?<div>

Total amount:   $ {Total}<br/>
    <button onClick={()=>{goHome("/");}} className="goback">Continue Shopping</button>
   </div>:<div>Cart empty</div>}
</div>)
}