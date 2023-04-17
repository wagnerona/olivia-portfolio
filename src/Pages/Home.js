import React from 'react';
import { Link } from 'react-router-dom';




const Home = () => {
  return (


    <section name="home" className="bg-movies h-screen bg-[#C9B6A6] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className=" text-black bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl">
            Olivia Brown
          </h1>
          <p className="mx-auto mt-4 max-w-xl font sm:text-xl sm:leading-relaxed">
            Tell us what type of movies you're looking for and we'll handle the rest
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className=" block w-auto rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              to="/form"
            >
              Social
            </Link>
            <Link
              className=" block w-auto rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              to="/form"
            >
              E-commerce
            </Link>
            <Link
              className=" block w-auto rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              to="/form"
            >
              Editorial
            </Link>
          </div>
        </div>
      </div>
    </section>



  )
}


export default Home