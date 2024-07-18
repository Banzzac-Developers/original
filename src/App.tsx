import "./styles/App.css";
import { Outlet } from "react-router-dom";
import ModalLayout from "./layouts/ModalLayout";
import initMockAPI from "./utils/msw";


if(process.env.VITE_NODE_ENV ==="development"){
  initMockAPI();
}


function App() {
  return (
    <>
      <ModalLayout />
      <Outlet />
    </>
  );
}

export default App;
