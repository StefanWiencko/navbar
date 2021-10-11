import { FC, ReactChild } from "react";
import { Redirect, Route } from "react-router-dom";
type Props = {
  children: ReactChild;
  isLogged: boolean;
  path: string;
};
export const ProtectedRoute: FC<Props> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return rest.isLogged === true ? children : <Redirect to="/" />;
      }}
    />
  );
};
