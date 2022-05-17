import { Route, Routes } from "react-router-dom";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Home from "./components/Home";
import { Layout } from "./components/Layout";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id">
            <Route index element={<EditPost />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}
