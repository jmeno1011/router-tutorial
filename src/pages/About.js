import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null || "null" ? 1 : parseInt(mode) + 1;
    console.log(mode);
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>紹介</h1>
      <p>「react-router」を使てみるプロジェクトです。</p>
      <p>URLの末尾に「?detail=true&mode=1」を付けてみてください</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1 </button>
      {/* <p>query string: {location.search}</p> */}
    </div>
  );
};


export default About;
