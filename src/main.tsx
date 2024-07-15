import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<App />}></Route>));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
