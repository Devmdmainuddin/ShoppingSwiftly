
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BannerMyQueries from "../components/BannerMyQueries";


const MyQueries = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth() || {}
    const [queries, setqueries] = useState([])

    console.log(user?.email)

    useEffect(() => {

        getData()
    }, [user])
    const getData = async () => {
        const { data } = await axiosSecure(`${import.meta.env.VITE_API_URL}/myQueries?email=${user?.email}`)
        setqueries(data);
    }


    const handledelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/myQueries/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // const remaining = item.filter(craft => craft._id !== _id);
                            // setItem(remaining);
                            const remaining = queries.filter(p => p._id !== _id);
                            setqueries(remaining);
                        }

                    })



            }
        });

    }




    return (
        <div>
            <BannerMyQueries></BannerMyQueries>


            <div className="max-w-[1200px] mx-auto">
                <Helmet>
                    <title>shopSwiftly | MyQuries </title>
                </Helmet>
                <section className="container px-4 ">
                    <div className="flex items-center gap-x-6 justify-center">
                        <h2 className="text-center text-2xl text-slate-600 my-7">my Quries</h2>

                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">total Quries : {queries.length}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                        {queries.length ? queries.map(p =>
                            <article key={p._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <img
                                    alt=""
                                    src={p.image}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="bg-white p-4 sm:p-6">


                                    <h3 className="mt-1  text-xs text-gray-500 "> {p.queryTitle} </h3>
                                    <h2 className="block text-[16px] text-gray-900 "> {p.productName} </h2>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                        {p.brandName}
                                    </p>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <span>{p.createAt} </span>
                                        <span>{p.recommendationCount}</span>
                                    </div>
                                    <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                                        <span> {p.userInfo.reName} </span>
                                        <span>{p.userInfo.reEmail}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-x-3 mt-3">
                                        <Link to={`/queries/${p._id}`} className="block text-center  rounded text-white px-6 py-2 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>details</button></Link>
                                        <button onClick={() => handledelete(p._id)} className="block text-center  rounded text-white px-6 py-2 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto">delete </button>
                                        <Link to={`/UpdateQueries/${p._id}`} className="block text-center   rounded text-white px-6 py-2 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto">eddit </Link>
                                    </div>
                                </div>

                            </article>
                        ) : <article className=" w-full flex justify-center items-center flex-col text-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Queries not found</h1>

                            <Link to='/addQueries' className="bg-teal-500 text-white py-2 px-7 rounded-md mt-7 inline-block ">add Queries</Link>
                        </article>}


                    </div>
                </section>

            </div>
        </div>
    );
};

export default MyQueries;

