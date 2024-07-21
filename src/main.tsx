import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { RecoilRoot } from "recoil";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { worker } from "./utils/msw/browser.ts";
import Friends from "./pages/Friends/index.tsx";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/friends" element={<Friends />} />
    </Route>,
  ),
);

const enableMocking = async () => {
  if (import.meta.env.VITE_NODE_ENV === "mocking") {
    await worker.start();
  }
};

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </React.StrictMode>,
  ),
);
