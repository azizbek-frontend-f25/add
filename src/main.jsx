import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "./context/UserContext";
import Routers from "./routes/Routers";
import { BasketContext } from "./context/BasketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BasketContext>
    <UserProvider>
      <Routers />
    </UserProvider>
  </BasketContext>
);
