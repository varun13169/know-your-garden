import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { QuizContextProvider, ThemeContextProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
  rootElement
);
