import React from "react";
import "./SingleFood.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
function SingleFood() {
  let [singleFood, setSingleFood] = useState({});
  let { code } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:8080/items?code=${code}`).then((res) =>{
        setSingleFood(res.data[0]);
        console.log(res.data)
      } )
  }, []);

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

export default SingleFood;