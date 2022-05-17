import React from "react";
import Feed from "./Feed";

export const Home = ({ posts, isLoading, fetchError }) => {
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">no posts to display. </p>
        ))}
    </main>
  );
};

export default Home;
