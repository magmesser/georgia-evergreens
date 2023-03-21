import React from "react";

function ImageCard(props) {
    return (
        <div className="[width:33%] flex flex-row items-center gap-2">
            <div className="[width:50%]">
                <img
                    className="rounded "
                    src={props.img}
                    alt="delivery truck"
                />
            </div>
            <div className="h-max rounded [color:#11402f]">
                <p className="">{props.title}</p>
                <small>{props.description}</small>
            </div>
        </div>
    );
}

function Banner() {
    return (
        <div className="relative w-screen">
            <div className="flex justify-center">
                <img
                    className=" w-screen z-0 "
                    src="/imgs/emeraldhouse.png"
                    alt="House with emerald green arborvitae"
                />
            </div>
            <div className="absolute gap-3 flex flex-row text-left top-20 m-4 p-4 [background-color:rgba(242,241,233)] [width:100%] h-30 z-10 rounded ">
                <ImageCard
                    img="/imgs/delivery.jpg"
                    title="We Deliver & Install"
                    description="For FREE on orders of 7 or more"
                />
                <ImageCard
                    img="/imgs/delivery.jpg"
                    title="We Deliver & Install"
                    description="For FREE on orders of 7 or more"
                />
                <ImageCard
                    img="/imgs/delivery.jpg"
                    title="We Deliver & Install"
                    description="For FREE on orders of 7 or more"
                />
            </div>
            <div className="absolute flex flex-row text-left top-60 p-4 [width:100%] h-30 z-10 rounded">
                <div className="[width:50%] flex flex-row ml-5">
                    <p className="[font-size:4.2vw] [color:rgba(242,241,233)]">
                        Create beautiful evergreen privacy with our premium
                        trees
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
