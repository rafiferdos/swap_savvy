// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import HashLoader from "react-spinners/HashLoader";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    // const location = useLocation()

    // const {user, loading} = useContext(AuthContext)

    // if(loading) 
    //     return <HashLoader color="#36d7b7" />

    // if(!user) 
    //     return <Navigate to='/login' state={location?.pathname || '/'} />
    
    return children
};

export default PrivateRoute;