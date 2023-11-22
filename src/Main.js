import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import StartPage from "./pages/StartPage";
import PickCarPage from "./pages/PickCarPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="pickCar" element={<PickCarPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
