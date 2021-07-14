import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./reducer/store";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
