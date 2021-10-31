import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../Auth/Firebase/Auth';

const PrivetRoute = ({ children, ...rest }) => {
    let {user} = Auth();
    console.log(user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;