import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>ホーム</h1>
      <p>一番、最初に見せるページです</p>
      <ul>
        <li>
          <Link to={"/about"}>紹介</Link>
        </li>
        <li>
          <Link to={"/profiles/meno"}>menoのプロフィール</Link>
        </li>
        <li>
          <Link to={"/profiles/gildong"}>gildongのプロフィール</Link>
        </li>
        <li>
          <Link to={"/profiles/void"}>存在しないプロフィール</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
