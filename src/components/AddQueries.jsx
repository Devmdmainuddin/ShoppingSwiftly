
import '../App.css'
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import axios from "axios";
import useAuth from "../hooks/useAuth";


const AddQueries = () => {
    const { user } = useAuth() || {}
   

    const handleAddProduct = async (e) => {
        e.preventDefault();
        // console.log('ok')
        const form = e.target;
        const image = form.image.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const queryTitle = form.queryTitle.value;
        const boycotReason = form.boycotReason.value;
        const createAt = (new Date()).toDateString();
        const name = user.displayName;
        const email = user.email;
        const userImage = user.photoURL;
        const recommendationCount = 0;
        const userInfo = {name,email,userImage}

      

        const info = {  image, productName,brandName,queryTitle,boycotReason,createAt,recommendationCount,userInfo };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addQueries`, info)
            // console.log(data)
            if (data?.insertedId) {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " add Queries items ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (err) {
            // console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " add Queries items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };

    return (
        <div>
            <div className="max-w-[1200px] mx-auto">
                <Helmet>
                    <title>shopSwiftly | AddQueries </title>
                </Helmet>
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-2xl text-slate-600 my-7">add Queries </h2>
                    <div className="horizontalLine mt-6">
                    </div>

                </div>


                <form onSubmit={handleAddProduct} className='mt-12 max-w-[786px] mx-auto'>
                    <div className="flex gap-8 ">
                        <div className="flex-1 items-start">
                            <label className="block mb-2 dark:text-white" htmlFor="productName">
                            product Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="products Name"
                                id="productName"
                                name="productName"
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="brandName"
                            >
                               brand Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="brand Name"
                                id="brandName"
                                name="brandName"
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="queryTitle"
                            >
                                Query Title
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="Query Title"
                                id="queryTitle"
                                name="queryTitle"
                            />

                           

                        </div>

                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="Enter Image URL"
                                id="image"
                                name="image"
                            />
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="boycotReason">
                            boycot Reason
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                type="text"
                                placeholder="  boycot Reason"
                                id="boycotReason"
                                name="boycotReason"
                            />

                           

                        </div>
                    </div>
                   
                    <input
                        className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        type="submit"
                        value="Add Queries"
                    />

                </form>

                <div className="flex flex-col items-center">


                </div>

            </div>
        </div>
    );
};

export default AddQueries;