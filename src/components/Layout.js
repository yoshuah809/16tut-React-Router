import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

import { Outlet } from "react-router-dom";

export const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title="React Js Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};
