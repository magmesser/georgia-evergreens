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
                    className="w-screen rounded-md shadow-md shadow-black"
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
            <div className="pb-10">
                <h2 className="text-3xl m-5 col-span-4 text-center">
                    {product.name}
                </h2>

                {/* TODO: REMOVE Testing cart */}
                <p>{cart.length}</p>
                {cart.map((i) => {
                    return <>{i.productQuantity}</>;
                })}
                {/* TODO: REMOVE Testing cart */}

                <div className="flex">
                    <div className="   rounded-md p-3  max-w-xl  justify-center">
                        <Images images={product.images} />
                    </div>
                    <div className="m-5 w-screen">
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
                        <form className="m-5 text-left flex flex-wrap">
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
                        <button
                            onClick={addToCart}
                            className=" [color:#a7d9d0] active:bg-blue-600 [background-color:#a7d9d0] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-no"
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

// {/* <Button className="[background-color:#064025] px-4 py-2 rounded-lg">
//                  <Link to={`/productdetails/${id}`}>Product Details</Link> 
//                 </Button> */}

export default SingleProduct;
