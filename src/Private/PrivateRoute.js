import {
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth()
  let history = useHistory();
  let location = useLocation();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;