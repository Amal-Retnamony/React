import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

let i = 0;
let sum = 0;
let Cart = [];
const Wp = () => (
  <React.Fragment>
    <h1 align="center">Shopping Cart</h1>
    <button class="count">{i}</button>
    <button onClick={Cartprint} class="cartbutton">cart</button>
    <ul>
      {
        products.map(product => <Product {...product} />)
      }
    </ul>
  </React.Fragment>
);

const Product = ({ id, name, price, total, tprice }) => (
  <li>
    <div class="product-list" align="center">
      <br />{name}
      <br />${price}
      <br />
      <button onClick={Message.bind(this,{id},{price})}>add to cart</button>
      <hr />
    </div>
  </li>
);


const Message = ( { id },{ price }) => {
  //Cart.push(p);
  console.log("entered",products);
  products[id-1].tprice  += price;
  products[id-1].total  += 1;
  const rootElement = document.getElementById("root");
  i++;
  sum = sum + price;
  console.log(products[id-1].tprice );
  console.log(products[id-1].total);
  ReactDOM.render(<Wp />, rootElement);
}

const Cartprint = wp1 =>
{
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Wp1 />, rootElement);
}

const Wp1 = () => {
  console.log("entered wp");
  return(
    <div>
    <h1 align="center">CART PAGE</h1>

    <table class="cart">
    <tr class="cart1"><td>Product name</td><td>Product count</td><td>total price</td></tr>
    <tr><td><hr/></td><td><hr/></td><td><hr/></td></tr>
    {
        products.map(pro => <tr><td>{pro.name}</td><td>{pro.total}$</td><td>{pro.tprice}</td></tr>)
    }
    </table>
    <p class="totalprice">totalprice={sum}/-</p>
  </div>);
};

const products = [
  { id: 1, name: "pen", price: 5, total: 0, tprice: 0 },
  { id: 2, name: "pencil", price: 4, total: 0, tprice: 0 },
  { id: 3, name: "book", price: 30, total: 0, tprice: 0 },
  { id: 4, name: "ruler", price: 10, total: 0, tprice: 0 },
]



const rootElement = document.getElementById("root");
ReactDOM.render(<Wp />, rootElement);
