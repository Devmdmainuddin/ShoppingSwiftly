// import img from '../../public/blog-4.jpg'

import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className=" mt-[100px] ">
      <div className="flex items-center justify-between md:flex-row flex-col  w-full  gap-4">
          <div className="relative w-full">
              <img className="h-[300px] w-full" src="https://i.ibb.co/h8t3z0Q/slider-home2-1.jpg" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
              <div className="p-3 absolute top-[30px] left-3">
                <p className="text-base leading-none text-gray-800">
                EnterWorks is an enterprise PIM solution
                </p>
                <p className="text-2xl font-semibold leading-9 text-gray-800 py-2">
                provides a single view platform for acquiring
                </p>
                <p className="text-sm leading-normal text-gray-600 max-w-[315px]">
                managing and syndicating all product data across different channels.
                </p>
                <Link to={`/queries`} className="inline-block text-center mt-3  rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 " ><button>more product</button></Link>
              </div>
          </div>
          <div className="relative w-full">
              <img className="h-[300px] w-full object-cover" src="https://i.ibb.co/n6k5XRN/time-bg.jpg" alt="" />
              <div className="p-3 absolute top-[30px] left-3">
                <p className="text-base leading-none text-gray-800">
                Product information management systems
                </p>
                <p className="text-2xl font-semibold leading-9 text-gray-800 py-2">
                 available for our organization. 
                </p>
                <p className="text-sm leading-normal text-gray-600 max-w-[315px]">
                This PIM solution offers both product information and digital asset management capabilities
               digital asset management capabilities
                </p>
                <Link to={`/queries`} className="inline-block text-center mt-3  rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 " ><button>more product</button></Link>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Banner;