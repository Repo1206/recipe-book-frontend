import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice"; // Import your reducer
import App from "./App"; // Import your App component
import "./index.css"; // You can import your own styles here

const store = configureStore({
  reducer: {
    recipes: recipesReducer, // Make sure the key matches your slice name
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
