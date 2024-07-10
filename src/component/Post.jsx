// import { useContext } from "react";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import { PostList } from "../Store/Post-List-store";

// const Post = ({ post }) => {
//   const { deletePost } = useContext(PostList);
//   return (
//     <div class="card Post-card" style={{ width: "30rem" }}>
//       <div class="card-body">
//         <h5 class="card-title">
//           {post.title}
//           <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//             <MdOutlineDeleteOutline onClick={() => deletePost(post.id)} />
//           </span>
//         </h5>
//         <p class="card-text">{post.body}.</p>
//         {post.tags.map((tag) => (
//           <span class="badge text-bg-primary Tag-button">{tag}</span>
//         ))}
//       </div>

//       <div class="alert alert-success" role="alert">
//         This post has been reacted by {post.reactions} People.
//       </div>
//     </div>
//   );
// };

// export default Post;



import { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PostList } from "../Store/Post-List-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  console.log("Rendering post:", post);

  // Check if post.reactions is an object and handle it appropriately
  let reactionsContent;
  if (typeof post.reactions === 'object') {
    reactionsContent = JSON.stringify(post.reactions);
  } else {
    reactionsContent = post.reactions;
  }

  return (
    <div className="card Post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdOutlineDeleteOutline onClick={() => deletePost(post.id)} />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary Tag-button">
            {tag}
          </span>
        ))}
      </div>

      <div className="alert alert-success" role="alert">
        This post has been reacted to by {reactionsContent} people.
      </div>
    </div>
  );
};

export default Post;

