import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = async id => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              className="deleteButton"
            >
              Delete Post
            </button>
          </>
        ) : (
          <>
            <h2>Post Not Found</h2>
            <p> Well, that is not good</p>
            <p>
              <Link to="/">Visit Our Home Page</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
