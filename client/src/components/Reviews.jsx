import React from "react";
import Carousel from "./Carousel";

function Reviews() {
    return (
        <>
        <div className="relative flex flex-row w-screen mt-20 h-60 [background-color:#a7d9d0]">
            <Carousel />
            <div className="w-1/2 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto officiis odio ipsam expedita perspiciatis nostrum
                laborum quia, suscipit quam pariatur aperiam, deserunt quaerat
                adipisci in reprehenderit doloribus unde atque. Consectetur.
            </div>
        </div>
        </>
    );
}

export default Reviews;
