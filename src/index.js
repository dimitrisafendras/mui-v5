import * as React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import EmotionWithHOC from "./emotionWithHOC";
import EmotionWithoughtHOC from "./emotionWithoughtHOC";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <EmotionWithoughtHOC />
  </ThemeProvider>,
  document.querySelector("#root")
);
