import { Link } from "react-router-dom";
import useQueries from "../hooks/useQueries";
import { useState } from "react";


const RecentQueries = () => {
    const [dataLength, setDataLength] = useState(6);
    const items = useQueries()

    return (
        <div>
            <div className="flex justify-between items-center mt-24">
                <h2 className="w-4/5  text-2xl text-slate-600 my-7 border-b-2  pb-3 border-double">Recent  Quries</h2>
                <button
                        // onClick={() => setDataLength(items.length)}
                    className="py-2 px-7 border border-teal-500 text-teal-500 rounded-sm">Show All </button>
              
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">


                {
                    items.slice(0, dataLength).map(item => <article key={item._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src={item.image}
                            className="h-56 mx-auto object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">
                            <h3 dateTime="2022-10-10" className="block text-xs text-gray-600">Queries : {item.queryTitle}   </h3>
                            <h3 className="mt-1 text-lg text-gray-900"> {item.productName} </h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                                <span>Brand : {item.brandName} </span>
                                <span>ALternation reason : {item.boycotReason}</span>
                            </div>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                                <span>posted :{item.createAt} </span>
                                <span>recommendationCount : {item.recommendationCount}</span>
                            </div>
                            <p className="text-center py-1">author info</p>
                            <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                                <span> <img className="w-12 rounded-full" src={item.userInfo.userImage ? item.userInfo.userImage : "https://i.ibb.co/n3pxCKM/profile.png"} alt="" /> </span>
                                <span>{item.userInfo.name}</span>
                            </div>
                            <Link to={`/queries/${item._id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>recommend</button></Link>
                        </div>

                    </article>)
                }

            </div>
        </div>
    );
};

export default RecentQueries;