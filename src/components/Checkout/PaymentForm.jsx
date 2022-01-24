import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
  CardElementContainer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import axios from "axios";

const PaymentForm = (props) => {
  const { cartItems, backStep, shippingData, nextStep } = props;
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
  const url = "http://localhost:8080/api/order/";
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = { order : "bar"
        // line_items: cartItems,
        // customer: {
        //   firstname: shippingData.firstName,
        //   lastname: shippingData.lastName,
        //   email: shippingData.email,
        //   adress: shippingData.adress,
        //   city: shippingData.City,
        //   country: shippingData.shippingCountry,
        // },
        // payment: {
        //   gateway: "stripe",
        //   stripe: {
        //     payment_method_id: paymentMethod.id,
        //   },
        // },
      };
      console.log(orderData);
      axios.post(url, orderData)
        .then((response) => {console.log(response)})
      nextStep();
      localStorage.removeItem("cartItems");
    }
  };

  return (
    <>
      <Review cartItems={cartItems} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer stripe={stripePromise}>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disable={!stripe}
                  color="primary"
                >
                  Pay
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
