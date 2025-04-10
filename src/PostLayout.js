import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <>
        <h1 style={{ background: "green", width: "100%" }}>Post</h1>
      </>

      <Outlet />

      <>
        <h1 style={{ background: "green", width: "100%" }}>Post</h1>
      </>
    </>
  );
}
