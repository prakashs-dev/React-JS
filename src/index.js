import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
// import { Chat } from "./chat.js";
import FetchData from "./fetchData.js";

// ReactDOM.createRoot(document.getElementById("super")).render(app);

const root = ReactDOM.createRoot(document.getElementById("super"));
// root.render(<App id="abc" className="mno"/>);
root.render(
  <>
    {/* <App /> */}
    <FetchData/>
  </>
);
