import React from "react";
import { useParams } from "react-router-dom";

const data = {
  meno: {
    name: "キム・ドヒョン",
    description: "reactを好きな開発者",
  },
  gildong: {
    name: "ホンギルドウ",
    description: "古典小説ーホンギルドウの主人公",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>使用者プロフィール</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>存在しないプロフィールです。</p>
      )}
    </div>
  );
};

export default Profile;
