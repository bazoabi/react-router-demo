import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <h1 style={{ background: "red" }}>Hello World!!!</h1>
      <h2>Welcome to this hello world page</h2>
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
