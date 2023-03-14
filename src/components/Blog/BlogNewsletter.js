import React from 'react'

const BlogNewsletter = () => {
return(
  <div className="flex justify-center items-center mb-8 mx-4">
  <div className="m-auto p-8 bg-white border-2 border-gray-900 rounded-lg shadow-lg md:w-8/12">
    <p className="text-center text-xs font-bold">STAY UPDATED</p>
    <h3 className="text-center mt-2 text-2xl font-bold">Get Community Updates and Opportunities.</h3>
    <div className="flex my-8 items-center justify-center ">
      <div className="relative w-full md:w-4/5">
        <input
          type="text"
          className="block w-full py-2 pl-4 pr-8 border-2 border-primary rounded-full focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="Enter your email"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="submit"
            className="inline-flex items-center px-8 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

)
}
export default BlogNewsletter