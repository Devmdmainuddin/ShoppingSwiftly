import { useLoaderData } from "react-router-dom";
import Querie from "../components/Querie";
// import useQueries from "../hooks/useQueries";
import { useEffect, useState } from "react";
import axios from "axios";

const Queries = () => {
    // const items = useQueries()
    const [itemsperpage, setitemsperpage] = useState(9)
    const { count } = useLoaderData()
    const numberofPage = Math.ceil(count / itemsperpage);
    const [currentPage, setcurrentPage] = useState(0)
    const pages = [...Array(numberofPage).keys()]
    const [items, setitems] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries?page=${currentPage}&size=${itemsperpage}`)
            .then(data => {
                setitems(data.data)
            })
    }, [currentPage, itemsperpage])

    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        setitemsperpage(value)
        setcurrentPage(0)
    }
    const handlepre = () => {
        if (currentPage > 0) {
            setcurrentPage(currentPage - 1)
        }
    }
    const handlenext = () => {
        if (currentPage < pages.length - 1) {
            setcurrentPage(currentPage + 1)
        }
    }




    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                {
                    items.map(item => <Querie
                        key={item._id}
                        item={item}
                    ></Querie>)
                }

            </div>

            <div>
                <p className="text-center mt-4">current page : {currentPage}</p>
                <div className="max-w-8xl mx-auto container py-10 flex justify-center items-center ">

                    <ul className="flex justify-center items-center ">
                        <li onClick={handlepre}>
                            <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </span>
                        </li>
                        {
                            pages.map(page => <button onClick={() => setcurrentPage(page)} key={page} className={currentPage === page ? "bg-orange-300 p-3" : 'mx-6 p-3 border-2'}>{page}</button>)
                        }
                        {/* <li>
                            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                        </li> */}

                        <li onClick={handlenext}>
                            <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                    <select name="" value={itemsperpage} onChange={handleItemsPerPage} id="" className="p-3">
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="18">18</option>
                        <option value="21">21</option>

                    </select>
                </div>
                ;
            </div>
        </div>
    );
};

export default Queries;