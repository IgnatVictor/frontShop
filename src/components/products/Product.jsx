import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from "./style";


function Product(props) {
  const classes = useStyles();
  const { product, onAdd } = props;
  

  

  return (
    <Card className={classes.root}>
      <Link  className={classes.linkProduct} to={{
            pathname:'/item', state : product
          }} ><CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      /></Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography className={classes.item2} variant="h5" gutterBottom>
            {product.name}+ "   "
          </Typography>
          <Typography variant="h5">{product.price + "$"}</Typography>
        </div>

        <Link  className={classes.linkProduct} to={{
            pathname:'/item', state : product
          }} > <Typography
          variant="body2"
          color="textSecondary"
          className={classes.item}
        >
          {" "}
          {product.description} ...
        </Typography> </Link>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart
            onClick={() => {
              onAdd(product);
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
