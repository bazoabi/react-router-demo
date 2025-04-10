import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>

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
