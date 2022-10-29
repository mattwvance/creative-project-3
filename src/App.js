import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Catering from "./pages/Catering";
import Menu from "./pages/Menu";
import Navbar from "./pages/Navbar"

export default function App() {
  console.log('here')
  return (
    <BrowserRouter basename='creative-project-3/build'>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Catering" element={<Catering />} />
          <Route path="Menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
