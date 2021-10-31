import { Redirect, Route } from "react-router-dom";
import Auth from "../Auth/Firebase/Auth";

function PrivateRoute({ children, ...rest }) {
    let { user } = Auth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.uid ? (
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
}
export default PrivateRoute