import React from "react";
import ProductInfo from "../Components/ProductInfo";
import Video from "../assests/abstract.mp4"

const Home =()=>{
    return(
        <div>
            <h2>Home</h2>
            <video loop muted autoPlay preload="auto">
        <source src={Video} type="video/mp4" />
      </video>
            <ProductInfo></ProductInfo>
        </div>
    )
}
export default Home;