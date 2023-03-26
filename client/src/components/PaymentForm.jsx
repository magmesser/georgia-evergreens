import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// import "./App.css";

const ProductDisplay = () => (
    <section className="FormGroup">
        <div className="product">
            <img
                src="src/assets/imgs/leyland-cypress.jpeg"
                alt="The cover of Stubborn Attachments"
            />
            <div className="description">
                <h3>Leyland Cypress</h3>
                <h5>$150.00</h5>
            </div>
        </div>
        <form action="/create-checkout-session" method="POST">
            <button type="submit">
                <Link to={"/create-checkout-session"}>
                   Checkout!
                </Link>
            </button>
        </form>
    </section>
);

// const Message = ({ message }) => (
//     <section>
//         <p>{message}</p>
//     </section>
// );

export default function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay />
    );
}





















// import React, { useState } from "react";
// import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"


// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: "#c4f0ff",
//             color: "#fff",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//             fontSize: "16px",
//             fontSmoothing: "antialiased",
//             ":-webkit-autofill": { color: "#fce883" },
//             "::placeholder": { color: "#87bbfd" }
//         },
//         invalid: {
//             iconColor: "#ffc7ee",
//             color: "#ffc7ee"
//         }
//     }
// }


// export default function PaymentForm() {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()





//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })


//         if (!error) {
//             try {
//                 const { id } = paymentMethod
//                 const response = await axios.post("https://localhost:3001/payment", {
//                     amount: 1000,
//                     id
//                 })

//                 if (response.data.success) {
//                     console.lof("succesful payment")
//                     setSuccess(true)
//                 }


//             } catch (error) {
//                 console.log('Error', error)
//             }
//         } else {
//             console.log(error.message)
//         }
//     }

//     return (
//         <>
//             <Elements>
//                 {!success ?
//                     <form onSubmit={handleSubmit}>
//                         <fieldset className="FormGroup">
//                             <div className="FormRow">
//                                 <CardElement options={CARD_OPTIONS} />
//                             </div>
//                         </fieldset>
//                         <button>Pay</button>
//                     </form>
//                     :
//                     <div>
//                         <h2>Thank you for your purchase!🌲</h2>
//                     </div>
//                 }
//             </Elements>
//         </>
//     )
// }