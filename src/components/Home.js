import React from "react";
import Feed from "./Feed";

export const Home = ({ posts }) => {
  return (
    <home className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No post to Display</p>
      )}
    </home>
  );
};

export default Home;
