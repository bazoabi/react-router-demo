import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import PostsList from "./PostsList";

function App() {
  return (
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
        <Route path="/posts" element={<PostsList />} />
        <Route path="/" element={<h1>This is homepage</h1>} />
        <Route path="/home" element={<h1>This is homepage</h1>} />
      </Routes>
    </div>
  );
}

export default App;
