import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Querie = ({item}) => {
    const {image,productName,brandName,queryTitle,userInfo,currentTime,recommendationCount,_id}=item;
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
            alt=""
            src={image}
            className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
            <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {productName} </h3>

            <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{brandName}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {queryTitle}
            </p>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>{currentTime} </span>
                <span>{recommendationCount}</span>
            </div>
            <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                <span> <img className="w-12 rounded-full" src={userInfo.userImage?userInfo.userImage:"https://i.ibb.co/n3pxCKM/profile.png"} alt="" /> </span>
                <span>{userInfo.name}</span>
            </div>
            <Link to={`/queries/${_id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-rose-600 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>recommend</button></Link>
        </div>

    </article>
    );
};
Querie.propTypes = {
    item: PropTypes.object
  };
export default Querie;