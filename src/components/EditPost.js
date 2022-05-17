import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import api from "../api/posts";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();

  const handleEdit = async id => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map(post => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="NewPost">
      {editTitle ? (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={e => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              required
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
              id="postTitle"
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={e => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <p> Well, that is not good at all</p>
          <p>
            <Link to="/">Visit Our Home Page</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
