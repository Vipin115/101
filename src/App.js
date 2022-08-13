import { Route, Routes } from "react-router";
import "./App.css";
import FoodItems from "./Components/Fooditems/Fooditems";
import SingleFoodItem from "./Components/Singlefood/Singlefood";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FoodItems />}></Route>
        <Route path="/:code" element={<SingleFoodItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;