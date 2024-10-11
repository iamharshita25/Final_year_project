import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.user);

    if (!currentUser) { 
        return <Navigate to="/signup" />;
    }
 
    return children;
};

export default PrivateRoute;
