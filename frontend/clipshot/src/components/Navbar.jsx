import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around gap-3 mt-3 h-auto p-3'>
      <div className='flex gap-2 bg-black border-2 text-xl text-white font-semibold px-5 py-2 rounded-xl text-center '>
        <img src="../../assets/logo.png" alt="" width={36} className='rounded-full' />
        <h1 className=' '>ClipShots</h1>
      </div>
        <div className='flex gap-2 items-center'>

            <input className='mb-2 border-2 border-gray-700 px-4 py-1 rounded-xl ' type="text" />
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </div>
        </div>
        <button className=' border-2 text-md bg-black text-white font-semibold px-5 py-1 rounded-xl text-center hover:bg-white hover:text-black hover:scale-105  transition-all  '>Sign in</button>
    </div>
  )
}

export default Navbar