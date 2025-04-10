import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";
import { Posts } from "./data/posts";
import NotFound from "./NotFound";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
import PostLayout from "./PostLayout";

function App() {
  return (
    <postsContext.Provider value={Posts}>
      <div className="App">
        {/* Demo navigation bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to={"/home"}>
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>
          <Link to={"/hello"}>
            <button style={{ fontSize: "30px" }}>Hello</button>
          </Link>
          <Link to={"/posts"}>
            <button style={{ fontSize: "30px" }}>Posts</button>
          </Link>
        </div>
        {/* Routes */}
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/posts" element={<PostLayout />}>
            <Route index element={<PostsList />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>

          <Route path="/" element={<h1>This is homepage</h1>} />
          <Route path="/home" element={<h1>This is homepage</h1>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
