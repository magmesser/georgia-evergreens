import React from "react";
import SingleProduct from "./SingleProduct"
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";

function Home() {
    return (
        <div className="Home">
            <Banner />
            <Reviews />
            <SingleProduct
                item={{
                    _id: "1",
                    name: "Test name",
                    images: [{ original: "imgs/giant.jpeg", thumbnail: null }],
                }}
            />
        </div>
    );
}

export default Home;
