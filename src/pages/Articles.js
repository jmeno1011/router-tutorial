import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to={"/articles/1"}>コメント１</Link>
        </li>
        <li>
          <Link to={"/articles/2"}>コメント２</Link>
        </li>
        <li>
          <Link to={"/articles/3"}>コメント３</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
