import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ActicleItem id={1} />
        <ActicleItem id={2} />
        <ActicleItem id={3} />
      </ul>
    </div>
  );
};

export default Articles;

const ActicleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        コメント {id}
      </NavLink>
    </li>
  );
};
