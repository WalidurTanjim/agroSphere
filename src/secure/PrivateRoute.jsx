import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <RingLoader color="#facc15" size={100} speedMultiplier={1.2} />
                <p className="text-yellow-400 mt-4 font-semibold text-lg">Loading, please wait...</p>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
