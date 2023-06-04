import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

//TODO provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    // const [cart , refetch] = useCart();
    // console.log(cart);
    // const total = cart.reduce((sum, item) => item.price + sum, 0)
    const [cart] = useCart();
    const total = cart.reduce(( sum , item) => sum + item.price,0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading="Please Process" heading="Payment" />
            <h2 className="text-3xl">taka</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price = {price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Payment;