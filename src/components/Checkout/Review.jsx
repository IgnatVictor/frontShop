import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { Products } from "..";

const Review = (props) => {
  const { cartItems } = props;
  let subtotal = 0;
  let subtotal1 = cartItems?.forEach((element) => {
    subtotal = subtotal + element.qty * element.price;
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={"Quantity and Price"}
            />
            <Typography variant="body2">
              {product.price} X{product.qty}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0 " }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {subtotal} $
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
