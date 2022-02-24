import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles로 이동
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
        <button onClick={goBack}>戻る</button>
        <button onClick={goArticles}>コメント一覧</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
