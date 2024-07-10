import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-List-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const[fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(()=>{
    setFetching(true);
    fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((data) => {addInitialPosts(data.posts)
      setFetching(false);
    });

    return()=>{
      controller.abort();
    }
   
  },[])

  return (
    <>
      {/* { postList.map((post) =><Post/>)} */}
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      { !fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;