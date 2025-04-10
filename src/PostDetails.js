import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postsContext";

export default function PostDetails() {
  const { postId } = useParams();
  console.log("Post Id is: ", postId);

  const posts = useContext(postsContext);
  const post = posts.find((p) => {
    return p.id === postId;
  });

  console.log("the targeted post is: ", post);

  return (
    <>
      <h1>Post Details Page</h1>
      <h1>{post.title}</h1>

      <h4>{post.body}</h4>
    </>
  );
}
