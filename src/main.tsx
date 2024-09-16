import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      pauseOnHover={true}
      theme="dark"
      transition={Flip}
    />
  </StrictMode>
);
