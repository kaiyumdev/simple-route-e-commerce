import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from './../../firebase.init';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;