import {Products} from "../Product/Products"
import {Product} from "../Product/Product"
import { InputContext } from "../context/InputContext"
export const Home=(props)=>{
   
console.log(props.data);
    return(
        <div className="home">
        
            <div className="hometitle">
                <p>Rabbit's Shop </p>
            </div>
      
            <div className="products">
{Products.map((e)=>{ return<Product data={e}/> })}

          </div>

</div>
    )
}
