import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {MovieApp} from "./movie/MovieApp"
import Slider from "./imageSlider/Slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Slider/>
    <MovieApp/>
  </React.StrictMode>
);
