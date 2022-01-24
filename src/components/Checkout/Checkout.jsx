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
import useStyles from "./styles";
import AdressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";
import { Link } from "react-router-dom";
import verifyIfTokenIsExpired from "../Services/UserCheck";
import { LOGGEDIN } from "../atom/Atom";
import { useAtom } from "jotai";
const steps = ["Shipping adress", "Payment details"];

function Checkout(props) {
  const { cartItems } = props;
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const [shippingData, setShippingData] = useState({});

  const Confirmation = () => (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2"></Typography>
      </div>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">
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
        shippingData={shippingData}
        nextStep={nextStep}
      />
    );

    const [loggedIn, setLoggedIn] = useAtom(LOGGEDIN)

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
          
         
        </> )
      
   
}

export default Checkout;
