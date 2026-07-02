import React, { useEffect, useState } from 'react'
import Like from './Like'

const PostCard = ({user_id , dp , img_url , caption,likes , comments,id}) => {

    const [isLiked , setIsLiked] = useState(false)
    
    useEffect(()=>{
        if(!id){
            return
        } 
        const  checkIsLiked = () =>{
            let result = likes.filter((e)=>e === id);
            if(!result){
                return 
            }else{
                setIsLiked(true)
            }
        }
        checkIsLiked()
    },[likes])



  return (
    <div className=' border border-gray-700 rounded-md h-auto w-1/3 p-2 m-3 bg-white'>
        <div className='flex gap-2'>
            <div className='rounded-full border border-gray-700  w-10 h-10 '>
                <img className='w-full h-full object-cover rounded-full ' src={dp} alt="dp" />
            </div>
            <h1 className=' text-xl font-serif'>{user_id}</h1>
        </div>

        <div className='m-2 rounded-xl overflow-hidden'>
            <img src={img_url} alt="" className='w-full h-full max-h-175 object-cover' />
        </div>

        <div className='flex justify-start px-3 gap-3 items-top'>
            <div className='flex gap-1 items-center'>
                <Like isLiked={false} />
                <h5 className='text-[16px] font-semibold ' >{likes.length}</h5>
            </div>
            <div className='flex gap-1 items-center' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
                <h5 className='text-[16px] font-semibold ' >{comments.length}</h5>
            </div>
        </div>
        <div>
            <h1 className='text-sm font-semibold mx-3'>{caption.slice(1,caption.length-1)}</h1>
        </div>
    </div>
  )
}

export default PostCard