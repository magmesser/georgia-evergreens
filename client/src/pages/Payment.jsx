import { useEffect, useState } from "react"; 
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useStoreContext } from '../utils/state';

function Payment({cartItem}) {
  const [, dispatch] = useStoreContext();

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
      body: JSON.stringify({items: [{id: ""}]}),
    }).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    })
  }, []);




  return (
    <>
      <h1>Georgia-Evergreens Payment System 🌲</h1>
      {stripePromise && clientSecret(
      <Elements stripe={stripePromise} options = {{clientSecret}}>
        <CheckoutForm />
      </Elements>

      )}
    </>
  );
}

export default Payment;
