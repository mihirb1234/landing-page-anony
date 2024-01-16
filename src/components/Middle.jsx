import React from 'react'

const Middle = () => {
  return (
   <div className='bg-white mt-2 w-f'>
     <div className='w-full bg-black py-16 px-4 '>
        
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img
        src="https://media.giphy.com/media/z3ZzHIN66i7X6KAbxh/giphy.gif"
        alt="Among Us GIF"
        className="mx-auto mb-6 mt-4 " // Adjust margin-bottom as needed
        onError={(e) => {
          console.error("Error loading GIF:", e);
        }}
        />
          <div className='flex flex-col'>
              <p className=' font-abc text-xl mx-auto md:text-2xl '>You can write 1 secret ANONYMOUSLY in a day</p>
              <h1 className='text-white text-sm text-center font-extrabold'>Lorem ipsum dolor sit amet.</h1>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates autem laudantium minus aliquid labore? Deserunt error fugit exercitationem in nihil inventore sunt sequi cumque. Ex, veniam. Sint libero, nisi, excepturi perspiciatis qui enim consequuntur sed amet suscipit culpa ipsam cumque?</p>
              <button className="w-full sm:w-auto md:w-auto mx-auto bg-red-700 hover:bg-red-400 transform hover:scale-105 font-medium rounded-md my-6 px-6 py-4 transition duration-300 ease-in-out">
Drop a Message
</button>

          </div>
        </div>

  </div>
   </div>
  )
}

export default Middle