import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import GlobalContextProvider from './Components/Store/GlobalContext'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </StrictMode>

);


