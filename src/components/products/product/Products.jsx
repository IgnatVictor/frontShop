import React from "react";
import  {Grid }from "@material-ui/core";

import Product from '../Product'
import useStyles from './styles'




const Products = (props) => {
    const {products, onAdd} = props;
    const classes = useStyles(); 
    
   
    return (
        <main className={classes.content}>
            <div className= {classes.toolbar}/>
        <Grid container justify = 'center' spacing = {4}>
            {products.map((product) => (
                <Grid item key= {product.id} xs= {12} sm ={6} lg= {3} >
                    <Product product= {product} onAdd={onAdd}/>
                </Grid>
            ))}
        </Grid>
    </main>

    );
   
}

export default Products;