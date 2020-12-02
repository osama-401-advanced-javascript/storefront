const initialState = {
  categories: [],
  activeCategory: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'READ_CATEGORIES':
      console.log('READ_CATEGORIES,payload ', payload);
      return { ...state, categories: payload };
    case 'change':
      let activeCategory = payload.name;
      return { ...state, activeCategory };
    default:
      return state;
  }
};
