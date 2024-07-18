import "./styles/App.css";
import { Outlet } from "react-router-dom";
import ModalLayout from "./layouts/ModalLayout";

function App() {
  return (
    <>
      <ModalLayout />
      <Outlet />
    </>
  );
}

export default App;
