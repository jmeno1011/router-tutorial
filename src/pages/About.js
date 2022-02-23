import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div>
      <h1>紹介</h1>
      <p>「react-router」を使てみるプロジェクトです。</p>
      <p>URLの末尾に「?detail=true&mode=1」を付けてみてください</p>
      <p>query string: {location.search}</p>
    </div>
  );
};

export default About;
