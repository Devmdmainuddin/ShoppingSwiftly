import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { Helmet } from "react-helmet-async";
const QueriesUpdate = () => {
    const queries =useLoaderData();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log('ok')
        const form = e.target;
        const image = form.image.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const queryTitle = form.queryTitle.value;
        const lastUpdate = (new Date()).toDateString();
        const info = {  image, productName,brandName,queryTitle,lastUpdate };

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/updateQueries/${queries._id}`, info)
            console.log(data)
            if (data?.insertedId) {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " add art & craft items ",
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
                title: " add art & craft items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };
    return (
        <div>
            <Helmet>
                <title>shopSwiftly | QreriesUpdate </title>
            </Helmet>
            <h2>update</h2>

            <form onSubmit={handleAddProduct} className='mt-12'>
                    <div className="flex gap-8 ">
                        <div className="flex-1 items-start">
                            <label className="block mb-2 dark:text-white" htmlFor="productName">
                            product Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={queries.productName}
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
                                className="w-full p-2 border rounded-md focus:border-[#FF497C] focus:outline-none"
                                type="text"
                                defaultValue={queries.brandName}
                                placeholder="brand Name"
                                id="brandName"
                                name="brandName"
                            />

                          

                           

                        </div>

                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={queries.image}
                                placeholder="Enter Image URL"
                                id="image"
                                name="image"
                            />
                              <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="queryTitle"
                            >
                                Query Title
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={queries.queryTitle}
                                placeholder="Query Title"
                                id="queryTitle"
                                name="queryTitle"
                            />
                            
                        
                        </div>
                    </div>
                   
                    <input
                        className="inline-block w-full rounded bg-indigo-600 mt-4 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        type="submit"
                        value="updata queries"
                    />

                </form>
        </div>
    );
};

export default QueriesUpdate;