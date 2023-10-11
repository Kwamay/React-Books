const ADD_CATEGORY = 'bookstore/category/ADD_CATEGORY';
const underConstruction = 'Under Construction';

const initialState = [];

export const addCategory = () => ({
  type: ADD_CATEGORY,
  text: underConstruction,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return action.text;
    default: return state;
  }
};

export default categoryReducer;
