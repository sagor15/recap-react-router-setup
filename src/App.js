import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Orderreview from "./Components/OrderReview/Orderreview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/orderreview" element={<Orderreview></Orderreview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
