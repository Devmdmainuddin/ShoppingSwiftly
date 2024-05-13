import { Helmet } from "react-helmet-async";
import useRecommendation from "../hooks/useRecommendation";


const RecommendationMe = () => {
    const queries = useRecommendation()
    return (
        <div>
            <Helmet>
                <title>shopSwiftly | Recommendation </title>
            </Helmet>

            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-6 justify-center">
                    <h2 className="text-center text-2xl text-slate-600 my-7">Recommendation For Me</h2>
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">total  : {queries.length}</span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                                <span>QueryId</span>

                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <h2>image</h2>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <h2>productName</h2>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            QueryTitle</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            created </th>
                                           
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            post </th>


                                        </tr>
                                    </thead>
                                    {
                                        queries?.map(items => (
                                            <tbody key={items._id} className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                <tr>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {items._id}
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                                                        <img className="w-12" src={items.image} alt="images" />

                                                    </td>
                                                   
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        ${items.productName}</td>
                                                   
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {items.queryTitle}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {items.autherName}</td>
                                                   
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    {items.currentTime}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RecommendationMe;