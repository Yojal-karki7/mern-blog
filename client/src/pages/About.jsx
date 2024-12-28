     import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className='text-3xl font-semibold text-center my-7'>About Yojal's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>Yojal's Blog is a blog that I created to practice about web development. I want to be a software engineer and I love to learn more and more. I hope you enjoy my blog.</p>
            <p>On this blog, you'll find weekly articles and projects that i build to grow in the field of web development.I am always learning and improving myself, so be sure to check back often for new content!</p>
            <p>I encourage you to leave comments on my posts and engage with readers. You can like other people's comment and reply to them as well. I believe that a community of learners can help each other grow and improve</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
