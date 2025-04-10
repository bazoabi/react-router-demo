import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postsContext";

export default function PostsList() {
  const posts = useContext(postsContext);
  const postsListRenderer = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div style={{ background: "orange", padding: "1vh", margin: "3vh" }}>
          <h1>{post.title}</h1>
          <hr />
          {/* <h4>{post.body}</h4> */}
        </div>
      </Link>
    );
  });

  return (
    <>
      {postsListRenderer}
      <Link to="/home">
        <div
          style={{
            background: "orange",
            padding: "10px",
            borderRadius: "40px",
          }}
        >
          <h1>Go To HomePage</h1>
        </div>
      </Link>
    </>
  );
}
