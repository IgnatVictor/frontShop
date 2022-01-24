import React, { Component } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CartContent,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import useStyles from "./styles";

const Cartitem = (props) => {
  const {item, onAdd, onRemove, onRemoveProduct} = props;
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image = {item.image} alt= {item.name} className= {classes.media}/>
      <CardContent className={classes.cardContent}>
          <Typography variant= "h4">{item.name}</Typography>
          <Typography variant= "h5">{item.price} $</Typography>
      </CardContent>
      <CardActions className= {classes.cartActions}>
          <div className= {classes.buttons}>
            <Button onClick= {()=> onRemove(item)} type="button" size ="small"> - </Button>
            <Typography>{item.qty}</Typography>
            <Button onClick= {()=> onAdd(item)}  type="button" size ="small"> + </Button>
          </div>
          <Button onClick= {()=> onRemoveProduct(item)}variant="contained" type="button" color= "secondary">Remove</Button>
      </CardActions>
      
    </Card>
    
  );
};

export default Cartitem;
