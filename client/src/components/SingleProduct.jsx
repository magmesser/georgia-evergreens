import React from "react";
import { useStoreContext } from "../utils/state";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

function Images({images}) {
    if (images.length > 0) {
        return (
            <>
                <img
                    alt="tree"
                    className="w-lg m-5"
                    src={`${images[0].original}`}
                    // {require("../assets/imgs/dev/placeholder.jpg")}
                />
            </>
        );
    } else {
        return (
            <>
                <img src="" alt=""></img>
            </>
        );
    }
}

function StylesSelector(sytles) {
    return <>

    </>;
}

const SingleProduct = ({item}) => {
    const { name, _id, description, images, notes, styles } = item;
    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    function addToCart() {
        // Checking to see if a particular item is already in cart
        const itemInCart = cart.find((_item) => _item._id === _id);
        if (itemInCart) {
            console.log('Update cart')
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                productQuantity: parseInt(itemInCart.productQuantity) + 1,
            });
            // If item is not already in the cart add one of item
        } else {
            console.log('add to cart')
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, productQuantity: 1 },
            });
        }
    }

    return (
        <>
            <div className="grid grid-cols-4">
                <h2 className="text-3xl m-5 col-span-4 text-left">{name}</h2>

                {/* TODO: REMOVE Testing cart */}
                <p>{cart.length}</p>
                {cart.map((i) => {return (<>{i.productQuantity}</>)})}
                {/* TODO: REMOVE Testing cart */}

                <Images images={images} />
                <form className="m-5 text-left">
                    <div className="radio">
                        <input type="radio" value="small" checked={true} />
                        <label className="ml-2"> Small </label>
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
                                <button
                                    onClick={addToCart}
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 m-5 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Add to Cart
                                </button>
                                {/* <div className="text-2xl m-5">{description}</div> */}
                                {/* <div className="m-5">{notes}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
