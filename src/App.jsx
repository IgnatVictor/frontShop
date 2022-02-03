import { Category } from "@material-ui/icons";
import { useAtom } from "jotai";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Products,
  Navbar,
  Cart,
  Checkout,
  Pagination,
  Responsive,
  Item,
  Dropdown,
} from "./components";
import { CATEGORY, SEARCH } from "./components/atom/Atom";
import { FooterContainer } from "./components/footer/Footer";
import Profile from "./Profile/Profile"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useAtom(CATEGORY);
  const [search1, setSearch1] = useAtom(SEARCH);
  let limit = 5;

  const onRemove = (product) => {
    const exist = cartItems?.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    if (search1 == 0) {
      setSearch1("all");
    }
    const fetchProducts = async () => {
      const res = await fetch(
        "https://webshopelectro.herokuapp.com/api/search?page=0&limit=8&search=" + search1
      );
      const data = await res.json();
      console.log(data);
      setData(data);
      setProducts(data.content);
    };
    fetchProducts();
  }, [search1]);

  useEffect(() => {
    if (category == 0) {
      setCategory("all");
    }
    const fetchProducts = async () => {
      const res = await fetch(
        "https://webshopelectro.herokuapp.com/api/category?page=0&limit=8&category=" + category
      );
      const data = await res.json();
      setData(data);
      setProducts(data.content);
    };
    fetchProducts();
  }, [category]);

  const onAdd = (product) => {
    const exist = cartItems?.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      // localStorage.setItem("cartItems",JSON.stringify(cartItems))

      // JSON.parse(localStorage.getItem("cartItems"))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://webshopelectro.herokuapp.com/api/products?page=0&limit=8"
      );
      const data = await res.json();
      setData(data);
      setProducts(data.content);
    };

    fetchProducts();
  }, [limit]);

  const fetchProducts = async (page) => {
    const res = await fetch(
      "https://webshopelectro.herokuapp.com/api/products?page=" + page + "&limit=8"
    );
    const data = await res.json();
    return data.content;
  };

  const selectCategory = async (page) => {
    const res = await fetch();
  };

  const handlePageClick = async (data) => {
    let page = data.selected;
    const commentsFormServer = await fetchProducts(page);

    setProducts(commentsFormServer);
  };

  const onRemoveProduct = (product) => {
    const exist = cartItems?.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const onEmptyCart = () => {
    cartItems.forEach((element) => {
      setCartItems(cartItems.filter((element) => element.id !== element.id));
    });
  };

  useEffect(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <Router>
      <div>
        <Navbar onAdd={onAdd} cartItems={cartItems} />
        <Responsive />
        <Route exact path="/">
          <Dropdown products={products} />
        </Route>

        <Switch>
          <Route exact path="/item" component={Item} />
          <Route exact path="/">
            <Products onAdd={onAdd} products={products} />
          </Route>

          <Route exact path="/cart">
            <Cart
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
              onRemoveProduct={onRemoveProduct}
              onEmptyCart={onEmptyCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout cartItems={cartItems} />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>

        </Switch>

        <Switch>
          <Route exact path="/">
            <Pagination
              totalProducts={data.totalElements}
              handlePageClick={handlePageClick}
            />
          </Route>
        </Switch>
      </div>

      <>
        <Route exact path="/">
          <FooterContainer />
        </Route>
      </>
    </Router>
  );
};

export default App;
