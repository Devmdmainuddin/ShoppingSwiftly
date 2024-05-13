import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { RiMenu2Line } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {

    const [theme, setTheme] = useState('light')
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    console.log(theme)
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const handlelogOut = () => {
        logOut()
            .then(() => console.log('user logged successfully'))
            .catch(error => console.error(error))
    }
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])

   return (
        <div className='px-4 py-5  max-w-[1170px] mx-auto md:px-24 lg:px-8 '>
            <div className='relative flex items-center justify-between z-40'>

                <Link to='/'
                    aria-label='shopSwiftly'
                    title='shopSwiftly'
                    className='inline-flex items-center'><img className="h-[40px]" src="https://i.ibb.co/K5LJ1TG/logo.jpg" alt="" /></Link>

                <ul className='items-center hidden gap-x-6 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            data-tooltip-id="Home"
                            data-tooltip-content="Home!"
                            data-tooltip-place="top"

                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="Home" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/queries'
                            data-tooltip-id="Queries"
                            data-tooltip-content="Queries"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="Queries" />
                            Queries
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/recommendationsMe'
                            data-tooltip-id="recommendationsMe"
                            data-tooltip-content="recommendations Me"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="recommendationsMe" />
                            Recommendations For Me
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/myqueries'
                            data-tooltip-id="myqueries"
                            data-tooltip-content="my queries"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="myqueries" />
                            my queries
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/myrecommendation'
                            data-tooltip-id="myrecommendation"
                            data-tooltip-content="my recommendation"
                            data-tooltip-place="top"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        ><Tooltip id="myrecommendation" />
                            my recommendations
                        </NavLink>
                    </li>



                </ul>
                <div className=" hidden  lg:flex items-center gap-x-3">

                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {user ?
                        <button
                            onClick={handlelogOut}
                            className="btn btn-sm  btn-ghost">Logout</button>
                        : <Link to='/login'>login</Link>}

                </div>


                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <RiMenu2Line></RiMenu2Line>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/'
                                            aria-label='shopSwiftly'
                                            title='shopSwiftly'
                                            className='inline-flex items-center'>shopSwiftly</Link>


                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink
                                                to='/'
                                                data-tooltip-id="Home"
                                                data-tooltip-content="Home!"
                                                data-tooltip-place="top"

                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            ><Tooltip id="Home" />
                                                Home
                                            </NavLink>
                                        </li>


                                        <li>
                                            <NavLink
                                                to='/queries'
                                                data-tooltip-id="Queries"
                                                data-tooltip-content="Queries"
                                                data-tooltip-place="top"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            ><Tooltip id="Queries" />
                                                Queries
                                            </NavLink>
                                        </li>


                                        <li>
                                            <NavLink
                                                to='/recommendationsMe'
                                                data-tooltip-id="recommendationsMe"
                                                data-tooltip-content="recommendations Me"
                                                data-tooltip-place="top"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            ><Tooltip id="recommendationsMe" />
                                                Recommendations For Me
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/myqueries'
                                                data-tooltip-id="myqueries"
                                                data-tooltip-content="my queries"
                                                data-tooltip-place="top"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            ><Tooltip id="myqueries" />
                                                my queries
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/myrecommendation'
                                                data-tooltip-id="myrecommendation"
                                                data-tooltip-content="my recommendation"
                                                data-tooltip-place="top"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            ><Tooltip id="myrecommendation" />
                                                my recommendations
                                            </NavLink>
                                        </li>
                                    </ul>

                                    {user ?
                                        <button
                                            onClick={handlelogOut}
                                            className="btn btn-sm  btn-ghost">Logout</button>
                                        : <Link to='/login'>login</Link>}







                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;