import { useState } from "react";
import useQueries from "../hooks/useQueries";
import { Link } from "react-router-dom";


const Blogs = () => {
    const [dataLength, setDataLength] = useState(6);
    const items = useQueries()
    const {image,_id}=items;
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">This Week Blogs</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">For a lot of fashion and retail brands, ecommerce has become the main form of commerce. That means more competition…</p>
                </div>
               
            </div>
        </div>
    );
};

export default Blogs;