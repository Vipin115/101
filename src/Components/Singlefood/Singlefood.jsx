import React from "react";
import "../SingleFoodItem/SingleFoodItem.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
function SingleFoodItem() {
  let [singleFood, setSingleFood] = useState({});
  let { id } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:8080/items?id=${id}`)
      .then((res) => setSingleFood(res.data[0]));
  }, [id]);
  return (
    <div className="parent">
      <Navbar />
      <div className="child">
        <img
          src="https://mathworld.wolfram.com/images/eps-svg/TetrahedronProj1_500.svg"
          alt=""
          className="image"
        />
        <p className="food">{singleFood.product_name}</p>
      </div>
      <div classname="child1">
        <table border={{}}>
          <tbody>
            {Object.keys(singleFood).map((key, index) => {
              return (
                <tr key={index}>
                  <td style={{ fontWeight: "bold" }}>{key}</td>
                  <td>{singleFood[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleFoodItem;