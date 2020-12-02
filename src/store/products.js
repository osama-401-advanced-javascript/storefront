const initialState = {
  products: [],
  productsToDisplay: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  console.log('in product ACTION???', action);

  switch (type) {
    case 'change':
      let targetCategory = payload.name;
      let productsToDisplay = state.products.filter((product) => {
        return product.category === targetCategory;
      });
      return { ...state, productsToDisplay };
    case 'READ_ALL_PRODUCTS':
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const changeActiveCategory = (name) => {
  return {
    type: 'change',
    payload: name,
  };
};
