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
                    className="w-screen object-cover rounded-md shadow-lg"
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

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = React.useState([]);
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

    return (
        <>
            <div className="pb-12 mb-40 mt-10 [background-color:#A7D9D0]">
                <h2 className="text-3xl m-5 col-span-4 text-center [color:#064025]">
                    {product.name}
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className=" rounded-md p-3 m-5">
                        <Images images={product.images} />
                    </div>
                    <div className=" rounded-md p-3 m-5">
                        <Images images={product.images} />
                    </div>
                    <div className="m-5">
                        <div className="card">
                            <div className="card-body">
                                <div className=" [color:#064025]">
                                    {product.description}
                                </div>
                                <div className="m-5 [color:#064025]">
                                    {product.notes}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col [color:#064025]">
                            <form className="m-5 text-left flex flex-wrap gap-4">
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="small"
                                        name="size"
                                        defaultChecked
                                    />
                                    <label className="ml-4 ">{product.styles[0].name}</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" value="medium" name="size" />
                                    <label className="ml-4">{product.styles[1].name}</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" value="large" name="size"/>
                                    <label className="ml-4">{product.styles[2].name}</label>
                                </div>
                            </form>
                            <button
                                onClick={addToCart}
                                className=" [color:#a7d9d0] [background-color:#064025] font-bold
                            uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                            outline-none focus:outline-no"
                                type="submit"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;

{
    /* TODO: REMOVE Testing cart */
}
{
    /* <p>{cart.length}</p>
                {cart.map((i) => {
                    return <>{i.productQuantity}</>;
                })} */
}
{
    /* TODO: REMOVE Testing cart */
}
