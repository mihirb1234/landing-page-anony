const Hero = () => {
    return (
      <div className='text-white bg-black '>
        <div className='max-w-[800px] mt-[-96] md:mt-[-96] w-full h-screen mx-auto flex flex-col text-center justify-center'>
          <h1 className="font-bold px-4 py-2 md:text-5xl sm:text-5xl text-4xl md:py-3">MESSAGE ANONYMOUSLY!!</h1>
          <p className="md:text-base mt-5 text-md font-thin  text-white">Welcome to <span className="font-extrabold text-purple-400">HushMate</span>, the exclusive space for your one-shot revelations! Here, you have the power to drop a solitary anonymous message, leaving an indelible mark without revealing your identity. Unleash your thoughts, share your confessions, or simply create a moment of intrigue. At [Your Chosen Name], we believe in the impact of a single message, allowing you to share your secret, confess your feelings, or leave a mystery behind. Make it count, make it anonymous, and let your message resonate in the echoes of anonymity</p>
          
          <button className="w-full md:w-[150px] sm:w-auto md:w-auto mx-auto bg-cyan-400 hover:bg-cyan-500 transform hover:scale-105 font-medium rounded-md my-6 px-6 py-4 transition duration-300 ease-in-out">
  Get Started
</button>

          
        </div>
      </div>
    );
  };
  
  export default Hero;
  