import "../pages/About.css"
import {BsFacebook,BsInstagram,BsTwitter} from "react-icons/bs"
export const About=()=>{
    return(
        <div className="aboutpage">
            <div className="About">
                About us
            </div>
            
            <div className="infoabout">
            <p>Welcome to Rabbits Shop We are an innovative and customer-centric online marketplace dedicated to providing you with an exceptional shopping experience. Our passion for delivering quality products, unmatched variety, and excellent service sets us apart in the world of e-commerce. Whether you're searching for trendy fashion, cutting-edge electronics, home essentials, or unique gifts, we have carefully curated a diverse collection of products to cater to your every need and desire. We believe that shopping should be convenient, enjoyable, and secure, which is why we prioritize user-friendly navigation, secure payment options, and prompt delivery. Our dedicated team of professionals is committed to ensuring your satisfaction, from browsing our vast catalog to the moment your purchase arrives at your doorstep. So, sit back, relax, and explore our virtual aisles, where endless possibilities await you. Thank you for choosing Rabbits Shop as your go-to destination for all your shopping needs.
  
       </p>
       <p className="contact">Contact us: 9842090901</p>
       <section className="social">
       <p> Our Social media</p>
  <div>
   <BsFacebook className="icon"></BsFacebook>
<BsInstagram  className="icon"></BsInstagram>
<BsTwitter  className="icon"></BsTwitter>
</div>
     </section>
        </div>
       
        </div>
    )
}