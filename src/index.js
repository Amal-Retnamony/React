import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let i = 0;
let TotalPrice = 0;

//Array of products
const products = [
  { id: 1, name: "Pen", price: 5 },
  { id: 2, name: "Pencil", price: 4 },
  { id: 3, name: "Book", price: 30 },
  { id: 4, name: "Ruler", price: 10 }
];

//array for product in carts
const cart = [
  { id: 1, name: "Pen", total: 0, itemtotalprice: 0 },
  { id: 2, name: "Pencil", total: 0, itemtotalprice: 0 },
  { id: 3, name: "Book", total: 0, itemtotalprice: 0 },
  { id: 4, name: "Ruler", total: 0, itemtotalprice: 0 }
];

//stateless component for printing products list
const App = () => (
  <React.Fragment>
    <h1 align="center">Shopping Cart</h1>
    Count:<button class="count">{i}</button>
    <button onClick={Cartprint} class="cartButton">
      cart
    </button>
    <ul>{products.map(product => <Product {...product} />)}</ul>
  </React.Fragment>
);

const Product = ({ id, name, price, total, tprice }) => (
  <li>
    <div class="productList" align="center">
       <br />
       <div class="divAlign">
          {id}
       </div>
       <div class="divAlign">
          {name}
      </div>
      <div class="divAlign">
      Rs.{price}
      </div>
      <div class="divAlign">
      <button onClick={Addtocart.bind(this, { id }, { price })} class="addToart">
        add to cart
      </button>
       </div>
    </div>
      <hr />
  </li>
);

//stateless component for cart list printing
const Cart = ({ id, name, total, itemtotalprice }) => {
  if (total === 0) {
    return null;
  }
  return (
    <tr>
      <td id="coloumn">{name}</td>
      <td id="coloumn">{total}</td>
      <td id="coloumn">{itemtotalprice}/-</td>
    </tr>
  );
};

//function for add to cart button
const Addtocart = ({ id }, { price }) => {
  cart[id - 1].itemtotalprice += price;
  cart[id - 1].total += 1;
  console.log(cart);
  const rootElement = document.getElementById("root");
  i++;
  TotalPrice = TotalPrice + price;
  ReactDOM.render(<App />, rootElement);
};

//function for cart button
const Cartprint = any => {
  if (i > 0) {
    const rootElement = document.getElementById("root");
    ReactDOM.render(<PrintTable />, rootElement);
  }
  else {
    const rootElement = document.getElementById("root");
    ReactDOM.render(<Noitem />, rootElement);
  }
};

//stateless component to print cart list
const PrintTable = () => (
  <div>
    <h1 align="center">CART PAGE</h1>
    <table class="cartItem" align="center">
      <tr >
        <td>Product name</td>
        <td>Product count</td>
        <td>total price</td>
      </tr>
      <tr>
        <td>
          <hr />
        </td>
        <td>
          <hr />
        </td>
        <td>
          <hr />
        </td>
      </tr>
      {cart.map(pro => <Cart {...pro} />)}
    </table>
    <p class="totalPrice">totalprice={TotalPrice}/-</p>
  </div>
);

//stateless component for print no item
const Noitem = () => {
  return (
    <div>
      <h1 align="center">CART PAGE</h1>
      <p class="noItem">No item added</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
