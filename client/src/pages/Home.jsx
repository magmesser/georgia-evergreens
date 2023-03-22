import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Reviews from "../components/Reviews";
function Home () {
    return (
        <div className="Home">
        <Banner/>
        <Reviews/>
        {/* <Carousel/> */}
        </div>
    )
}

export default Home