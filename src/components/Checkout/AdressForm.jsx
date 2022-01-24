import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import {Link} from 'react-router-dom'

const AdressForm = (props) => {
    const {next} =props;
    
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  const countries = [
    { value: "Romania", label: "Romania" },
    { value: "Canada", label: "Canada" },
    { value: "Rusia", label: "Rusia" },
  ];

  const methods = useForm();
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping Adress
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data)=> next({...data,shippingCountry}))}>
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="adress" label="Adress" />
            <FormInput name="email" label="Email" />
            <FormInput name="City" label="City" />
            <FormInput name="ZIP" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel> Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((element) => (
                  <MenuItem value={element.value}> {element.label}</MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br/>
          <div style= {{display: 'flex', justifyContent :'space-between'}}>
              <Button component= {Link} to='/cart' variant = "outlined">Back to Cart</Button>
              <Button type="submit" variant = "contained" color="primary" >Next</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdressForm;
