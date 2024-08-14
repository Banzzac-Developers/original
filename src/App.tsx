import "./styles/App.css";
import { Outlet } from "react-router-dom";
import ModalLayout from "./layouts/ModalLayout";
import ToastLayout from "./layouts/ToastLayout";
import Navigator from "./layouts/Navigator";

function App() {
  return (
    <>
      <ModalLayout />
      <ToastLayout />
      <Outlet />
      <Navigator />
    </>
  );
}

export default App;
