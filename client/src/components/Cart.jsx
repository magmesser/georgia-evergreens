import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from './CartItem';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/state';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { BsCartFill } from "react-icons/bs";

const stripePromise = loadStripe('pk_test_51Mm4DBEt2stpP8jUT68EIfZbGssaCGRsg73eXO6tvXL1XU6JmQ26c85ZUYqSm4ijQBkYyuiz9g07zCh9oOpL7hFD0027eiPLnu');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, {data}] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if(data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ tyupe: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0; 
        state.cart.forEach((product) => {
            sum += product.price * product.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((product) => {
            for (let i = 0; i <product.purchaseQuantity; i++) {
                productIds.push(product._id);
            }
        });

        getCheckout({
            variables: { product: productIds }, 
        });
    }

    if (!state.cartOpen) {
        return (
            <div className='cart-closed' onClick={toggleCart}>
               <BsCartFill className="text-2xl"/>
            </div>
        );
    }

    return (
        <div className='cart'>
            <div className='close' onClick={toggleCart}>
                [X] 
            </div>
            {state.cart.lenth ? (
                <div>
                    {state.cart.map((prodcut) => (
                        <CartItem key={product._id} product={product} />
                    ))}

                    <div className='flex-row space-between'>
                        <strong>Total: ${calculateTotal()}</strong>

                        {Auth.loggedIn() ? (
                            <button onClick={submitCheckout}>Checkout</button>
                        ) : (
                            <span>(log in to check out)</span>
                        )}
                    </div>
                    </div>
            ) : (
                <h3> You have nothing in your cart.</h3>
            )}
        </div>
    );
};

export default Cart;
