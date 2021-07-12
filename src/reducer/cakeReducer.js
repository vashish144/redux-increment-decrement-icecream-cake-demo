import { BUY_CAKE } from "./cakeTypes";

const initialCakeState = {
  noOfCake: 20,
};

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
