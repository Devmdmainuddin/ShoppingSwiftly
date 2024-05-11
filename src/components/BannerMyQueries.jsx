import { Link } from "react-router-dom";


const BannerMyQueries = () => {
    return (
        <div className="relative w-full">
            
            <img className="w-full h-[300px]" src="https://i.ibb.co/tpRHrTQ/vecteezy-online-shopping-on-phone-buy-sell-business-digital-web-8247813.jpg" alt="" />
        <div className="absolute top-1/4 left-1/4  text-center capitalize w-1/2">
            <p className="text-3xl font-bold">if your goal is to increase sales and make money, you can’t simply throw a product online and hope your business takes off</p>
        <Link to='/addQueries' className="bg-pink-700 text-white py-2 px-7 rounded-md mt-7 inline-block ">add Queries</Link>
        </div>
        
        
        </div>
    );
};

export default BannerMyQueries;