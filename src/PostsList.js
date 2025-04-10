import { Link } from "react-router-dom";

export default function PostsList() {
  return (
    <>
      <h1>Post Title:....</h1>
      <p>lorem ipsum.....</p>
      <Link to="/home">
        <div
          style={{
            background: "orange",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h1>Go To HomePage</h1>
        </div>
      </Link>
    </>
  );
}
