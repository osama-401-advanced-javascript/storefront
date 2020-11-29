const initialState = {
  products: [
    {
      name: 'TV',
      category: 'electronics',
      price: '$699.00',
      inStock: 5,
    },
    {
      name: 'Radio',
      category: 'electronics',
      description: 'bacon!!',
      price: '$99.00',
      inStock: 15,
    },
    {
      name: 'Shirt',
      category: 'clothing',
      price: '$9.00',
      inStock: 25,
    },
    {
      name: 'Socks',
      category: 'clothing',
      price: '$99.00',
      inStock: 500,
    },
    {
      name: 'Eggs',
      category: 'food',
      price: '$1.99',
      inStock: 12,
    },
    {
      name: 'Bread',
      category: 'food',
      price: '$2.39',
      inStock: 90,
    },
  ],
  productsToDisplay: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  console.log('in product ACTION???', action);

  switch (type) {
    case 'change':
      console.log('maleeeeek', payload);
      let targetCategory = payload.name;
      let productsToDisplay = state.products.filter((product) => {
        return product.category === targetCategory;
      });
      // console.log('DISPLAY PRODS', productsToDisplay);
      return { ...state, productsToDisplay };
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
