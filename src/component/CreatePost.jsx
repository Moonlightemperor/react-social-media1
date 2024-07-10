import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-List-store";




const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const UseridElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const ReactionsElement = useRef();
  const TagsElement = useRef();
  
   const handleSubmit = (event)=>{
     event.preventDefault();
     const Userid = UseridElement.current.value;
     const PostTitle = PostTitleElement.current.value;
     const PostBody = PostBodyElement.current.value;
     const Reactions = ReactionsElement.current.value;
     const Tags = TagsElement.current.value.split(" ");

       UseridElement.current.value = " "
       PostTitleElement.current.value = " "
       PostBodyElement.current.value = " "
       ReactionsElement.current.value = " "
       TagsElement.current.value= " "
  
     addPost(Userid,PostTitle,PostBody,Reactions,Tags);
   }


  return <form className="Create-post" onSubmit={handleSubmit}>


<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> User Id</label>
    <input type="UserId" class="form-control" id="UserId" ref={UseridElement} placeholder="Can I have your Id please...?"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Post Title</label>
    <input type="text" class="form-control" id="text" ref={PostTitleElement} placeholder="How are u feeling today...?"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Post Content</label>
    <textarea type="text" rows={4} class="form-control" id="text"  ref={PostBodyElement}placeholder="Tell us more about"/>
  </div>
  
  

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Reactions</label>
    <input type="Reactions" class="form-control" id="Reactions"  ref={ReactionsElement } placeholder="Number of peoples reacted to this"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> For Tags</label>
    <input type="Tags" class="form-control" id="Tags"  ref={TagsElement} placeholder="Enter tags here"/>
  </div>

  <button type="submit" class="btn btn-primary">Post</button>
</form>
}

export default CreatePost;