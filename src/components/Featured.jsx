import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <div className="lg:px-5 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">shopSwiftly</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">product information management platforms and compare their features. In general, each PIM platform is at parity with one another but there are subtle differences we’ll explore below the comparison table</p>
                    <Link to='/queries' aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline gap-x-3 ">
                        View Catalogue <FaArrowRightLong className="mt-2" />
                    </Link>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-[260px] relative">
                        <img src="https://i.ibb.co/nL7FKrD/banner-16.jpg" alt="apartment design" className="w-full h-full  object-cover " />
                        <Link to='/queries' className="flex items-center mt-4 cursor-pointer absolute top-1/2 left-5 text-gray-800 hover:text-white hover:underline">
                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <div className="relative">
                        <img src="https://i.ibb.co/Sx1gX40/banner-6.jpg" className="w-full" alt="kitchen" />
                        <Link to='/queries' className="flex items-center mt-4 cursor-pointer absolute left-24 top-12 text-gray-800 hover:text-white hover:underline">
                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        </div>
                        <div className="relative">
                        <img src="https://i.ibb.co/nBDG1tX/banner-9.jpg" className="w-full" alt="sitting room" />
                        <Link to='/queries' className="flex items-center mt-4 cursor-pointer absolute left-24 top-12 text-gray-800 hover:text-white hover:underline">
                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;