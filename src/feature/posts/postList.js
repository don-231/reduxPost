import { useSelector,useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit"
import { PostAuthor } from "./postAuthor";
import { TimeAgo } from "./timeAgo";

export const PostList = () => {
    const dispatch = useDispatch()
        const posts = useSelector(selectAllPosts)

        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        
        const renderedPosts = orderedPosts.map(
          (post) => (  
          <article className="rounded-lg drop-shadow-md p-3 bg-white w-96 mt-5">
          <h3 className="font-bold text-xl">{post.title}</h3>
          <p className="">{post.content.substring(0,100)}</p>
          <p><PostAuthor userId={post.userId}/>
          <TimeAgo timeStamp={post.date}/>
          </p>          
      </article>
      )
        )
        return (
            <section className="flex justify-center">
                <div>
                    <h2 className="font-bold text-3xl">Posts</h2>
                    {renderedPosts}
                </div>
            </section>
        )           
}