import { Route, Routes } from "react-router";
import "./App.css";
import FoodItems from "./Components/FoodItems/FoodItems";
import SingleFood from "./Components/SingleFood/SingleFood";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FoodItems />}></Route>
        <Route path="/:code" element={<SingleFood/>}></Route>
      </Routes>
    </div>
  );
}

export default App;