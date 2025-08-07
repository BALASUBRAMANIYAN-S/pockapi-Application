import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImagePage from "./Components/ImagePage";
import ApiPage from "./Components/ApiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiPage />} />
        <Route path="/details/:name/:numb" element={<ImagePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
