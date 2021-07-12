import React from "react";
import { connect } from "react-redux";
import { BuyCake } from "../reducer/cakeAction";
import "./CakeContainer.css";
function CakeContainer(props) {
  return (
    <div>
      <h1>no of rest cake: {props.noOfCake}</h1>
      <button onClick={props.buyCake}>BuyCake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    noOfCake: state.cake.noOfCake,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(BuyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
