import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Card ,CardGroup, Button, } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import "./Profile"

function OrderItems(props) {
  

  let order = props.location.state;
  const urlGetItems = "https://webshopelectro.herokuapp.com/api/itemOrder/getItems";
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState();
  const products = () => {
    axios
      .post(
        urlGetItems,
        { headers: { "Content-Type": "application/json" } },
        { params: { order_id: order.order_id } }
      )
      .then((response) => {
        setItems(response.data);
        setSum(response.data[0].orders.totalSum)
      });
  };
  

  useEffect(() => {
    products();
    
  }, []);

  

  return (
    <div className="body-main">
      <br />
      <br />

      <Typography classname= "title" variant="h4" gutterBottom>
        Order summary
      </Typography>
      <CardGroup xs={4} sm= {5} className= "edu_table" >
      {items.map((product) => (
        <Card >
          <Card.Img  variant= "top" src={product.product.image}  />
          <Card.Body>
            <Card.Title>{product.product.name}</Card.Title>
            <Card.Text>
              {product.product.description}
            </Card.Text>
          </Card.Body>
          <div className="card-footer">
          <Button disabled>Quantity x {product.qty}</Button>
          </div>
        </Card>
      ))}
      </CardGroup>
  
  

      <Button disabled >Total Sum: {sum} $</Button>
    
    </div>
  );
}

export default OrderItems;
