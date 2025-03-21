import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Alert } from "react-bootstrap";

const PrivateRoute = (props) => {
  console.log(">>> Check props: ", props);
  const { user } = useContext(UserContext);

  if (user && !user.auth) {
    return (
      <>
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>you don't have permisson to acess this route.</p>
        </Alert>
      </>
    );
  }

  return <>{props.children}</>;
};

export default PrivateRoute;
