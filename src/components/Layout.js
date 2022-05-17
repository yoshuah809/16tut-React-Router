import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";


import { Outlet } from "react-router-dom";
import useWindowsSize from "../hooks/useWindowsSize";

export const Layout = ({ search, setSearch }) => {
  const { width } = useWindowsSize();
  return (
    <div className="App">
      <Header title="React Js Blog" width={width} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};
