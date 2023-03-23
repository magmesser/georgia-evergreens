import React from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/state";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

// Display images from the database
function Images({ images }) {
    if (images.length > 0) {
        return (
            <>
                <img
                    alt="tree"
                    className="w-lg m-5"
                    src={`/${images[0].original}`}
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

// Function that gets a product from the database by its id
// function getProduct (id) {

//    return data.product
// }

function SingleProduct() {
    // const { name, _id, description, images, notes, styles } = item;
    const { id } = useParams();
    const [product, setProduct] = React.useState([])
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    // const loading = true;
    const { loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { id },
        onCompleted: (data) => {
            if (data && data.getProduct) {
                setProduct(data.getProduct);
            }
        },
    });

    function addToCart() {
        // Checking to see if a particular item is already in cart
        const itemInCart = cart.find((_item) => _item._id === id);
        if (itemInCart) {
            console.log("Update cart");
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                productQuantity: parseInt(itemInCart.productQuantity) + 1,
            });
            // If item is not already in the cart add one of item
        } else {
            console.log("add to cart");
            dispatch({
                type: ADD_TO_CART,
                product: { ...product, productQuantity: 1 },
            });
        }
    }

    // React.useEffect(() => {
    //     if (product._id) {
    //         setProduct(product)
    //     }
    // }, [product]);

    if (loading) {
        return <h2>Loading</h2>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!product || !product._id) {
        return (
            <>
                <div className="m-10 flex flex-col justify-center align-center">
                    <h1 className="text-center">Product Not Found</h1>
                </div>
            </>
        );
    }

    // return <p>{product.name}</p>
    // console.log(data);
    return (
        <>
            <div className="">
                <h2 className="text-3xl m-5 col-span-4 text-left">
                    {product.name}
                </h2>

                {/* TODO: REMOVE Testing cart */}
                <p>{cart.length}</p>
                {cart.map((i) => {
                    return <>{i.productQuantity}</>;
                })}
                {/* TODO: REMOVE Testing cart */}

                <div className="flex justify-left">
                    <div className="max-w-md">
                        <Images images={product.images} />
                    </div>
                    <div className="m-5 w-screen">
                        <form className="m-5 text-left">
                            <div className="radio">
                                <input
                                    type="radio"
                                    value="small"
                                    defaultChecked
                                />
                                <label className="ml-4">Small</label>
                            </div>
                            <div className="radio">
                                <input type="radio" value="medium" />
                                <label className="ml-4">Medium</label>
                            </div>
                            <div className="radio">
                                <input type="radio" value="large" />
                                <label className="ml-4">Large</label>
                            </div>
                        </form>

                        <div className="container">
                            <div className="">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-5">
                                            {product.description}
                                        </div>
                                        <div className="m-5">
                                            {product.notes}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={addToCart}
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 m-5 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;
