import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  CardContent,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";
import AdressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";
import { Link } from "react-router-dom";
import verifyIfTokenIsExpired from "../Services/UserCheck";
import { LOGGEDIN } from "../atom/Atom";
import { useAtom } from "jotai";
import { SUM } from "../atom/Atom";
const steps = ["Shipping adress", "Payment details"];

function Checkout(props) {
  
  const urlOrder = "https://webshopelectro.herokuapp.com/api/order/add";
  const { cartItems } = props;
  let subtotal = 0;
  cartItems?.forEach((element) => {
    subtotal = subtotal + element.qty * element.price;
  });
  
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const [shippingData, setShippingData] = useState({});
  const addOrder = () => {
    var userId = parseInt(localStorage.getItem("id"));
    
    axios.post(
      urlOrder,
      JSON.stringify({ orderItems: cartItems, totalSum: subtotal, userId: userId  }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    localStorage.removeItem("quantity");
  };

  const Confirmation = () => (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2"></Typography>
      </div>
      <br />
      <Button
        component={Link}
        to="/"
        onClick={addOrder()}
        variant="outlined"
        type="button"
      >
        Back to Home
      </Button>
    </>
  );

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AdressForm next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        cartItems={cartItems}
        backStep={backStep}
        nextStep={nextStep}
      />
    );

  const [loggedIn, setLoggedIn] = useAtom(LOGGEDIN);

  //   useEffect(() => {
  //     console.log("proba")
  //   }, [verifyIfTokenIsExpired()]);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
}

export default Checkout;
