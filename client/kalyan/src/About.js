import React from 'react'

const About = () => {
  return (
    <>
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt='about'/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div className="text-center">
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Me</span>
            </h2>
            <p class="text-gray-700 text-justify text-lg">
            Hi, I'm <span className='font-semibold font-serif underline'>Kalyan!</span> Welcome to my space, where I merge my love for technology with the vibrant world of lifestyle. I'm passionate about discovering and sharing the latest in tech, lifestyle trends, and everything new and exciting. Whether it’s diving into the latest gadgets, offering lifestyle tips, or sharing fresh and engaging content, I’m here to keep you inspired and informed.

Join me on this journey, support the content, and stay up-to-date with all the tech and lifestyle updates I love to share!
            </p>
        </div>
    </div>
    </div>
</>
  )
}

export default About
