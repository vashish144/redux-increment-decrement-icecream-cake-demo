import React from "react";
import { buyIceCream } from "../reducer/iceCreamAction";
import { connect } from "react-redux";
function IceCreamContainer(props) {
  return (
    <div>
      <h1>No of IceCream:{props.noOfIceCream} </h1>
      <button onClick={props.buyicecream}>buyIceCram</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.icecream.noOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyicecream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
