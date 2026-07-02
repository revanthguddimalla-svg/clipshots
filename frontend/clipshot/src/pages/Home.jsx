import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard';

const Home = ({user_name , id}) => {
    const [page , setpage ] = useState(1);
    const [posts,setPosts] = useState([])

    useEffect(() => {
       async function fetchPosts(){
            const response = await fetch(`http://localhost:3000/?page=${page}`);
            const body = await response.json()
            setPosts([
                ...posts,
                ...body
            ])
            console.log(posts)
       } 
       fetchPosts()
    }, [page])
    

  return (
    <div className=' flex flex-col items-center bg-black/20 '>
        {
            posts.map((post)=>{
                return <PostCard key={post._id} dp={post.user_id.dp} img_url={post.img_url} caption={post.caption} user_id={post.user_id.user_id} likes={post.likes} comments={post.comments} id={id} />
            })
        }
        <div onClick={()=>setpage(page+1)} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.3} stroke="black" className="size-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
    </div>
  )
}

export default Home