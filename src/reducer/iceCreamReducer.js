import { BUY_ICECREAM } from "./cakeTypes";

const iceCraminitialState = {
  noOfIceCream: 40,
};

const iceCreamReducer = (state = iceCraminitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
