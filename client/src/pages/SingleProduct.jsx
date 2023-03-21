import React, { useState } from "react";

const SingleProduct = () => {
    return (
        <div>
            <div className="container p-10">
                <div className="grid place-items-center">
                    <div className="card">
                        <h2 className="text-3xl">Product Name</h2>
                        <div className="card-body">
                            <img className="w-sm" src="./assets/imgs/dev/placeholder.jpg" alt="product name" />
              
                                <form>
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

                            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Add to Cart
                            </button>
                            <div className="text-2xl">
                                Description
                            </div>
                            <div className="">
                                Notes go here.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;