import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { LOGGEDIN, MODALL } from "../atom/Atom";
import Cartitem from "./CartItem/Cartitem";
import useStyles from "./styles";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, onRemoveProduct, onEmptyCart } = props;
  const [loggedIn, setLoggedIn] = useAtom(LOGGEDIN);
  const [open, setOpen] = useAtom(MODALL);
  const classes = useStyles();
  const isEmpty = !cartItems?.length;

  let subtotal = 0;
  let subtotal1 = cartItems?.forEach((element) => {
    subtotal = subtotal + element.qty * element.price;
  });

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartItems?.map((item) => (
          <Grid item xs={12} sm={4} key={cartItems.id}>
            <Cartitem
              item={item}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveProduct={onRemoveProduct}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {subtotal} $</Typography>
        <div>
          <Button
            onClick={onEmptyCart}
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          {loggedIn && (
            <Button
              component={Link}
              to="/checkout"
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          )}
          {!loggedIn && (
            <Button
              onClick={() => {
                setOpen(true);
              }}
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          )}
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
