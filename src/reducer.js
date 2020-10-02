export const initialState = {
  basket: [],
  user: null
};

export const getSubTotal = basket =>
  basket.reduce((price, item) => price + item.price, 0);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload.item]
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };

    case "REMOVE_FROM_BASKET":
      const itemIndex = state.basket.findIndex(
        basketItem => basketItem.id === action.payload.id
      );
      let newBasket = [...state.basket];
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
};
