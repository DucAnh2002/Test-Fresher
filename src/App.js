import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";

// import { Row } from 'react-bootstrap';

function App() {
  const { user, loginContext } = useContext(UserContext);

  console.log(">>> Check user", user);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  });

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
