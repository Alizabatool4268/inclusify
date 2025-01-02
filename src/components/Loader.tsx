import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <div className='h-[70px] w-[70px] rounded-[50%] flex justify-center items-center border-black border-b-[2px] border-r-[2px] 
        border-t-[2px] border-solid animate-spin'>
            <div className='h-[50px] w-[50px] rounded-[50%] border-t-[2px] border-solid border-black  border-l-[2px] animate-spin'>

            </div>
        </div> 
        loading...
    </div>
  )
}

export default Loader;