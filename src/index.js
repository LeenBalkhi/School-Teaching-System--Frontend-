import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
