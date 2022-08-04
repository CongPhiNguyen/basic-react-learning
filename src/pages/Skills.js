import React from "react";
import "./css/Skills.css";
import { useParams } from "react-router-dom";
export default function Skills() {
  let params = useParams();
  console.log("params", params);
  return (
    <div className="app">
      <h2 className="userID"> userID: {params.userID}</h2>
      <h1 className="name-title">Nguyễn Công Phi</h1>
      <ul className="skill-list">
        <li className="skill-list-item">HTML</li>
        <li className="skill-list-item">CSS</li>
        <li className="skill-list-item">JS</li>
        <li className="skill-list-item">MERN Stack</li>
      </ul>
    </div>
  );
}
