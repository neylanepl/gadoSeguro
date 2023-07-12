import React from 'react';

import { isAuthenticated } from '../../services/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    if(isAuthenticated()) {
        return(children);
    }
    return(<Navigate to="/login" />);
}

export default PrivateRoute;