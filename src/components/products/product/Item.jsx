import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Grid,
  } from "@material-ui/core";
  import useStyles from "./styles";
  

function Item(props) {

    const classes = useStyles();
    let product = props.location.state;

    console.log(product)
    return (
        <main className={classes.content}>
            <div className= {classes.toolbar}/>
        <Grid container justify = 'center' spacing = {4}>
                <Grid item key= {product.id} xs= {12} sm ={6} lg= {3} >
                <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography className={classes.proba1} variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price + "$"}</Typography>
        </div>

         <Typography
          variant="body2"
          color="textSecondary"
          className={classes.proba}
        >
          {" "}
          {product.description}
        </Typography> 
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          
        </IconButton>
      </CardActions>
    </Card>
                </Grid>
        </Grid>
    </main>
    )
}

export default Item
