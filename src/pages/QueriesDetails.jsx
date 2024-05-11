import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import '../App.css'
import Swal from 'sweetalert2'
import axios from "axios";
import useAuth from "../hooks/useAuth";

const QueriesDetails = () => {
    const { user } = useAuth() || {}
    const items = useLoaderData();
    console.log(items)

    const handleAddProduct = async (e) => {

        e.preventDefault();
        console.log('ok')
        const form = e.target;
        const image = form.image.value;
        const retitle = form.title.value;
        const recProName = form.recProName.value;
        const reReason = form.reReason.value;
        const queryId = items._id;
        const productName = items.productName;
        const autherName = items.userInfo.name
        const autherEmail = items.userInfo.email
        const reName = user.displayName;
        const reEmail = user.email;
        const currentTime = (new Date()).toDateString();
        const reuserInfo = { reName, reEmail }
        const recommendationCount = (items.recommendationCount)+(1);
        const info = { image, retitle, recProName, reReason, queryId, productName, autherName, currentTime, autherEmail, reuserInfo };
        const recoupdate = { recommendationCount }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addRecommendation`, info)
            console.log(data)
            if (data?.insertedId) {
                form.reset();

                const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/updaterecommen/${items._id}`, recoupdate)
                console.log(data)


                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " add art & craft items ",
                    showConfirmButton: false,
                    timer: 1500
                    // recommendationCount +
                });
            }
        }
        catch (err) {
            console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " add art & craft items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };
    return (
        <div>
            <Helmet>
                <title>Brush Tech Artisty | CraftDetails </title>
            </Helmet>

            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={items.image} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <div className="bg-white p-4 sm:p-6">
                                <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {items.productName} </h3>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-gray-900">{items.brandName}</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    {items.queryTitle}
                                </p>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <span>{items.currentTime} </span>
                                    <span>{items.recommendationCount}</span>
                                </div>
                                <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                                    <span> <img className="w-12 rounded-full" src={items.userInfo.userImage ? items.userInfo.userImage : "https://i.ibb.co/n3pxCKM/profile.png"} alt="" /> </span>
                                    <span>{items.userInfo.name}</span>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <h2>Add A Recommendation</h2>
            <form onSubmit={handleAddProduct} className='mt-12'>
                <div className="flex gap-8 ">
                    <div className="flex-1 items-start">
                        <label className="block mb-2 dark:text-white" htmlFor="title">
                            recommendation title
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="recommendation title"
                            id="title"
                            name="title"
                        />

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="recProName"
                        >
                            recommendation product Name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:border-[#FF497C] focus:outline-none"
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
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Recommended Product Image URL"
                            id="image"
                            name="image"
                        />
                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="reReason">
                            Recommended reason
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Recommended reason"
                            id="reReason"
                            name="reReason"
                        />




                    </div>
                </div>

                <input
                    className="inline-block w-full rounded bg-indigo-600 mt-4 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                    type="submit"
                    value="Add Product"
                />

            </form>

        </div>
    );
};

export default QueriesDetails;