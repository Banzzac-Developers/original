import "./styles/App.css";
import { Outlet } from "react-router-dom";
import ModalLayout from "./layouts/ModalLayout";
import ToastLayout from "./layouts/ToastLayout";

function App() {
  return (
    <>
      <ModalLayout />
      <ToastLayout />
      <Outlet />
    </>
  );
}

export default App;
