import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  //const { navigate } = useNavigate();
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={e => e.preventDefault()}>
        <label htmlFor="search" className="search">
          Search Posts
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search Post"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <React.Fragment>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </React.Fragment>
      </ul>
    </nav>
  );
};

export default Nav;
