import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user,loader } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location.pathname)


    if(loader){
        return 
    }
    if (user) {
        return children;
    }
        return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;