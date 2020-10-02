import React from "react";
import "../css/Product.css";
import { useStateValue } from "../StateProvider";
function Product({ id, title, image, price, rating }) {
  //const [state, dispatch] = useStateValue();
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
        }
      }
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <div>{title}</div>
        <div className="product_price">
          <small>INR </small>
          <strong>{price}</strong>
        </div>
        <div className="product_rating">
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
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
