import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  //const [state, dispatch] = useStateValue();
  const [{ basket,user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Sep20/Offers/FV-PC1.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.email : '' }</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {
            basket.map(item => (
              <CheckoutProduct key={`checkedoutproduct-${item.id}`}  id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
            ))
          }
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
