import React from "react";
import ReactDOM from "react-dom";
import SocialWebApp from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialWebApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
