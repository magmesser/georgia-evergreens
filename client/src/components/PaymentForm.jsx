import { useEffect, useState } from "react"; 
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


// const stripeCss = [
    
// ]

function Payment(props) {

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  
  useEffect(() => {

    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    })
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);


  return (
    <>
      <h1>Georgia-Evergreens Payment System 🌲</h1>
      {clientSecret && stripePromise(
      <Elements stripe={stripePromise} options = {{ clientSecret }}>
        <CheckoutForm />
      </Elements>

      )}
    </>
  );
}

export default Payment;




// import { Link } from "react-router-dom";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// // import "./App.css";

// const ProductDisplay = () => (
//     <section className="FormGroup">
//         <div className="product">
//             <img
//                 src="src/assets/imgs/leyland-cypress.jpeg"
//                 alt="The cover of Stubborn Attachments"
//             />
//             <div className="description">
//                 <h3>Leyland Cypress</h3>
//                 <h5>$150.00</h5>
//             </div>
//         </div>
//         <form action="/create-checkout-session" method="POST">
//             <button type="submit">
//                 <Link to={"/create-checkout-session"}>
//                    Checkout!
//                 </Link>
//             </button>
//         </form>
//     </section>
// );

// // const Message = ({ message }) => (
// //     <section>
// //         <p>{message}</p>
// //     </section>
// // );

// export default function App() {
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         // Check to see if this is a redirect back from Checkout
//         const query = new URLSearchParams(window.location.search);

//         if (query.get("success")) {
//             setMessage("Order placed! You will receive an email confirmation.");
//         }

//         if (query.get("canceled")) {
//             setMessage(
//                 "Order canceled -- continue to shop around and checkout when you're ready."
//             );
//         }
//     }, []);

//     return message ? (
//         <Message message={message} />
//     ) : (
//         <ProductDisplay />
//     );
// }
