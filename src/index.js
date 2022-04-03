import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import {
  CategoryContextProvider,
  QuizContextProvider,
  ThemeContextProvider,
} from "./context";

import { makeServer } from "./server";
// Call make Server
makeServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <CategoryContextProvider>
          <QuizContextProvider>
            <App />
          </QuizContextProvider>
        </CategoryContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
  rootElement
);
