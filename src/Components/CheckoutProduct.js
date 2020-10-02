import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id: id
      }
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>INR </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span
                role="img"
                aria-label={rating ? rating : ""}
                aria-hidden={rating ? "false" : "true"}
              >
                🌟
              </span>
            ))}
        </div>
        {
          !hideButton && <button onClick={removeFromBasket}>Remove From Basket</button>
        }
      </div>
    </div>
  );
};

export default CheckoutProduct;
