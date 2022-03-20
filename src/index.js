import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { QuizContextProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
