import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {
    const user = useContext(UserContext)
    return (
       <Route
            {...rest}
            render={({ location }) =>
                user.uid? (
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
    )
};

export default PrivetRoute;