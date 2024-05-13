
import Querie from "../components/Querie";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
const Queries = () => {

    const [itemsperpage, setitemsperpage] = useState(6)
    const [counts, setCounts] = useState(0)
    const [filter, setFilter] = useState('')
    const numberofPage = Math.ceil(counts / itemsperpage);
    const [currentPage, setcurrentPage] = useState(0)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const pages = [...Array(numberofPage).keys()]
    const [items, setitems] = useState([])

    useEffect(() => {

        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries?page=${currentPage}&size=${itemsperpage}&filter=${filter}&sort=${sort}&search=${search}`)
            setitems(data)
        }
        getData()
    }, [currentPage, itemsperpage, filter, sort, search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/queriesCount?filter=${filter}&search=${search}`
            )
            setCounts(data.count)
        }
        getCount()
    }, [filter, search])


    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        setitemsperpage(value)
        setcurrentPage(0)
    }
    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')
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
    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }


const handlesorts = e =>{
    
    const value = e.target.value
    console.log(value)
    const main = document.getElementById('gridLayout')
    if(value === '3col'){
        main.classList.add('grid-cols-3')
        main.classList.remove('grid-cols-1')
    main.classList.remove('grid-cols-2')
    }else if(value=== '2col'){
        main.classList.add('grid-cols-2')
        main.classList.remove('grid-cols-1')
    main.classList.remove('grid-cols-3')
    }else if(value === '1col'){
        main.classList.add('grid-cols-1')
        main.classList.remove('grid-cols-2')
    main.classList.remove('grid-cols-3')
    }
   

    {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
}

    return (
        <div className="mt-4">
            <Helmet>
                <title>shopSwiftly | Qreries </title>
            </Helmet>

            <div className="text-center">
                <h3 className="text-2xl font-bold text-teal-500">Our Queries</h3>
                <h2 className="text-5xl">Our Queries Area</h2>
                <p>Product Information Management  centralizes and manages product data </p>

            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-6'>
                <div>
                    <select
                        onChange={e => {
                            setFilter(e.target.value)
                            setcurrentPage(0)
                        }}
                        value={filter}
                        name='queryTitle'
                        id='queryTitle'
                        className='border p-3 rounded-md bg-gray-100'
                    >
                        <option value=''>Filter By Category</option>
                        <option value='mobile'>mobile</option>
                        <option value='clothing'>clothing</option>
                        <option value='watches'>watches</option>
                        <option value='furniture'>furniture</option>
                        <option value='Laptop'>Laptop</option>
                        <option value='Camera'>Camera</option>
                    </select>
                </div>
                <form onSubmit={handleSearch}>
                    <div className="flex">

                        <div className="relative ">
                            <input
                                className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600   leading-4"
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Product Title'
                                aria-label='Enter Product Title'

                            />
                            <BsSearch className="absolute pointer-events-none top-4 right-5 " />

                        </div>
                        <button className="bg-teal-500  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-teal-400">
                            Search
                        </button>

                    </div>
                </form>


                <div>
                    <select
                        onChange={e => {
                            setSort(e.target.value)
                            setcurrentPage(0)
                        }}
                        value={sort}
                        name='sort'
                        id='sort'
                        className='border p-3 rounded-md bg-gray-100'
                    >
                        <option value=''>Sort By Deadline</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </div>

                <select id="sort" name="sort"  className='border p-3 rounded-md bg-gray-100'>
              
                    <option onClick={handlesorts} value="3col">3 column</option>
                    <option onClick={handlesorts} value="2col">2 column</option>
                    <option onClick={handlesorts} value="1col">1 column</option>

                </select>


                <button onClick={handleReset} className=' border p-3 rounded-md bg-gray-100 text-green-600'>
                    Reset
                </button>
            </div>

{/*  <div id="gridLayout" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"> */}
            <div id="gridLayout" className="grid grid-cols-3 gap-6 mt-12">

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