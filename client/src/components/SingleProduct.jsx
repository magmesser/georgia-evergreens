import React, { useState } from "react";


const SingleProduct = () => {
    return (
        <>
            <div className="grid grid-cols-4">
                <h2 className="text-3xl m-5 col-span-4 text-left">Product Name</h2>
                <img className="w-lg m-5" alt="product name"
                // {require("../assets/imgs/dev/placeholder.jpg")}
                /> 
                <form className="m-5 text-right">
                    <div className="radio">
                        <label>
                            <input type="radio" value="small" checked={true} />
                            Small
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="medium" />
                            Medium
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="large" />
                            Large
                        </label>
                    </div>
                </form>
                <div className="container">
                    <div className="">
                        <div className="card">
                            <div className="card-body">

                                <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 m-5 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Add to Cart
                                </button>
                                <div className="text-2xl m-5">
                                    Description
                                </div>
                                <div className="m-5">
                                    Notes go here.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;