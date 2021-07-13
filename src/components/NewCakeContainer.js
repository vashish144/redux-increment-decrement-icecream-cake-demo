import React, { useState } from "react";
import { connect } from "react-redux";
import { BuyCake } from "../reducer/cakeAction";
import "./CakeContainer.css";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>no of rest cake: {props.noOfCake}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
    buyCake: (number) => dispatch(BuyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
