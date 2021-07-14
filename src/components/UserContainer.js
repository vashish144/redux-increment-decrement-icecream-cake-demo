import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUser,
  fetchUserFailure,
  fetchUserSuccess,
  fetchUserRequest,
} from "../reducer/user/userAction";

function UserContainer({ userData, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);
  return userData.loading ? (
    <h2>Loding...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {userData &&
        userData.user &&
        userData.user.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
