// import img from '../../public/blog-4.jpg'

const Banner = () => {
    return (
      <div className=" mt-[100px] ">
      <div className="flex items-center justify-between md:flex-row flex-col  w-full  gap-4">
          <div className="relative w-full">
              <img className="h-[300px] w-full" src="https://i.ibb.co/N6sq5Z9/blog-2.jpg" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
              <div className="p-4 absolute top-1/4 left-4">
                <p className="text-base leading-none text-gray-800">
                  Save upto 30%
                </p>
                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                  Summer Sale
                </p>
                <p className="text-base leading-normal text-gray-600">
                  Want to save some cash and still look like a fashion diva ?
                  <br />
                  Checkout our summer sale now !!!
                </p>
              </div>
          </div>
          <div className="relative w-full">
              <img className="h-[300px] w-full" src="https://i.ibb.co/qYxwQB1/blog-4.jpg" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
              <div className="p-4 absolute top-1/4 left-4">
                <p className="text-base leading-none text-gray-800">
                  Save upto 30%
                </p>
                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                  Summer Sale
                </p>
                <p className="text-base leading-normal text-gray-600">
                  Want to save some cash and still look like a fashion diva ?
                  <br />
                  Checkout our summer sale now !!!
                </p>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Banner;