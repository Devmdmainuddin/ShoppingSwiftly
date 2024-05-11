import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handlelogOut = () => {
        logOut()
            .then(() => console.log('user logged successfully'))
            .catch(error => console.error(error))
    }
    return (
        <div>
            <nav className="bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                            </a>
                            <div className="flex lg:hidden">
                                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                </button>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between">
                            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                <NavLink className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">home</NavLink>
                                <NavLink to='/queries' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Queries</NavLink>
                                <NavLink className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Recommendations
                                    For Me</NavLink>
                                <NavLink to='/myqueries' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">My Queries </NavLink>
                                <NavLink to='/myrecommendation' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">my recommendations</NavLink>
                            </div>

                            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                               { user ?
                               <button
                               onClick={handlelogOut}
                               className="btn btn-sm  btn-ghost">Logout</button>
                               :<Link to='/login'>login</Link>} 
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;