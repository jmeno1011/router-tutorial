import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>ホーム</h1>
      <p>一番、最初に見せるページです</p>
      <Link to={"/about"}>紹介</Link>
    </div>
  );
};

export default Home;
