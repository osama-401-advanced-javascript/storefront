const initialState = {
  cartItems: [],
  counter: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  let cartItems = [...state.cartItems];
  console.log('in cart ', action);
  switch (type) {
    case 'ADD':
      cartItems.push(payload.name);

      return { ...state, cartItems, counter: cartItems.length };
    case 'REMOVE':
      cartItems = cartItems.filter((name) => name !== payload && name);
      console.log('cartItemst ', cartItems);
      return { ...state, cartItems, counter: cartItems.length };
    default:
      return state;
  }
};
