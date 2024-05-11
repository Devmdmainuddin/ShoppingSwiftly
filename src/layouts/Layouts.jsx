import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
const Layouts = () => {
    const { loader } = useContext(AuthContext)
    if (loader) {
        return <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }
    return (
        <div>
            
            {/* Navbar */}
            <Navbar />
            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layouts;