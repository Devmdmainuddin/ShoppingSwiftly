import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import '../App.css'
import Swal from 'sweetalert2'
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useRecommendation from "../hooks/useRecommendation";
import { useEffect, useState } from "react";

const QueriesDetails = () => {
    const { user } = useAuth() || {}
    const items = useLoaderData();
    const recomment = useRecommendation()
    const [reitems, setrecommentitems] = useState([])

    useEffect(() => {
        const filteritems = recomment.filter(p => p.queryId == items._id)
        setrecommentitems(filteritems)

    }, [items, recomment])


    const handleAddProduct = async (e) => {

        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const retitle = form.title.value;
        const recProName = form.recProName.value;
        const reReason = form.reReason.value;
        const queryId = items._id;
        const queryTitle = items.queryTitle;
        const productName = items.productName;
        const autherName = items.userInfo.name
        const autherEmail = items.userInfo.email
        const reName = user.displayName;
        const reEmail = user.email;
        const currentTime = (new Date()).toDateString();
        const reuserInfo = { reName, reEmail }
        const recommendationCount = (items.recommendationCount) + (1);
        const info = { image, retitle, recProName, reReason, queryTitle, queryId, productName, autherName, currentTime, autherEmail, reuserInfo };
        const recoupdate = { recommendationCount }


        try {
            if(user.email !== autherEmail){
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addRecommendation`, info)
                console.log(data)
           
            
            if (data?.insertedId) {
                form.reset();

                const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/updaterecommen/${items._id}`, recoupdate)
                console.log(data)

                axios.get(`${import.meta.env.VITE_API_URL}/recommendation`)
                .then(data => {
                    const filteritems = data.data.filter(p => p.queryId == items._id)
                    setrecommentitems(filteritems)
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " add recommendation items ",
                    showConfirmButton: false,
                    timer: 1500

                });
            }
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: " you are not allowed add recommendation ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (err) {
            console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " add recommendation faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };


    return (
        <div>
            <Helmet>
                <title>shopSwiftly | QueriesDetails </title>
            </Helmet>

            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4 items-center">
                        <div className="md:flex-1 px-4">
                            <div className="h-[300px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={items.image} alt="Product Image" />
                            </div>

                        </div>
                        <div className="md:flex-1 px-4">
                            <div className="bg-white p-4 sm:p-6">
                                <h3 dateTime="2022-10-10" className="block text-xs text-gray-600">Queries : {items.queryTitle}   </h3>
                                <h3 className="mt-1 text-lg text-gray-900"> {items.productName} </h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                                    <span>Brand : {items.brandName} </span>
                                    <span>ALternation reason : {items.boycotReason}</span>
                                </div>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                                    <span>posted :{items.createAt} </span>
                                    <span>recommendationCount : {items.recommendationCount}</span>
                                </div>
                                <p className="text-center">User Information</p>
                                <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                                    <span> <img className="w-12 rounded-full" src={items.userInfo.userImage ? items.userInfo.userImage : "https://i.ibb.co/n3pxCKM/profile.png"} alt="" /> </span>
                                    <span>{items.userInfo.name}</span>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 px-4">
                <h2 className="text-center text-2xl text-slate-600 my-7">Add A Recommendation products</h2>
                <form onSubmit={handleAddProduct} className='mt-12 max-w-[768px] mx-auto'>
                    <div className="flex gap-8 ">
                        <div className="flex-1 items-start">
                            <label className="block mb-2 dark:text-white" htmlFor="title">recommendation title</label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="recommendation title"
                                id="title"
                                name="title" />

                            <label className="block mt-4 mb-2 dark:text-white" htmlFor="recProName">
                                recommendation product Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="recommendation product Name"
                                id="recProName"
                                name="recProName"
                            />

                        </div>

                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Recommended Product Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="Recommended Product Image URL"
                                id="image"
                                name="image"
                            />
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="reReason">Recommended reason</label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="Recommended reason"
                                id="reReason"
                                name="reReason"
                            />
                        </div>
                    </div>

                    <input
                        className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500"
                        type="submit"
                        value="Add Recommended"
                    />

                </form>
            </div>
{/* <a href="https://ibb.co/k2ZGCs5"><img src="https://i.ibb.co/tpRHrTQ/vecteezy-online-shopping-on-phone-buy-sell-business-digital-web-8247813.jpg" alt="vecteezy-online-shopping-on-phone-buy-sell-business-digital-web-8247813" border="0"></a><br /><a target='_blank' href='https://nonprofitlight.com/ma/needham/needham-golf-club-inc'>needham golf club</a><br /> */}

            <h2 className="text-center text-2xl text-slate-600 my-7">All Recommendations</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                {reitems.map(p =>
                    <article key={p._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src={p.image}
                            className="h-56 w-full object-cover "
                        />

                        <div className="bg-white p-4 sm:p-6">
                            <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {p.productName} </h3>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-gray-900">{p.brandName}</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {p.queryTitle}
                            </p>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                <span>{p.currentTime} </span>
                                <span>{p.recommendationCount}</span>
                            </div>
                            <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                                <span> {p.reuserInfo.reName} </span>
                                <span>{p.reuserInfo.reEmail}</span>
                            </div>
                            <Link to={`/queries/${p._id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>recommend</button></Link>
                        </div>

                    </article>
                )}

            </div>



        </div>
    );
};

export default QueriesDetails;