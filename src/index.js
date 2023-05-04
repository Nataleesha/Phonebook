import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { store, persistor } from "components/Redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  position: "center-top",
  fontSize: "16px",
  width: "350px",
  clickToClose: "true",
  success: {
    background: "#3E8659",
  },
  failure: {
    background: "#A60000",
  },
  info: {
    background: "#3EA1A1",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
