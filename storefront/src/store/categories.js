const initialState = {
  categories: [
    {
      name: 'electronics',
      displayName: 'Elecronics',
    },
    {
      name: 'food',
      displayName: 'Food',
    },
    {
      name: 'clothing',
      displayName: 'Clothing',
    },
  ],
  activeCategory: 'electronics',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  // Not changing properly
  switch (type) {
    case 'change':
      let activeCategory = payload.name;
      console.log('ACTIVE CATEGORY: ', activeCategory);
      return { ...state, activeCategory };
    default:
      return state;
  }
};

// export const activeCategory = (name) => {
//   return {
//     type: 'change',
//     payload: name,
//   };
// };
