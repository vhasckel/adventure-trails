import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
// import { UsersContextProvider } from "/context/usersContext";

function App() {
  return (
    <>
      {/* <UsersContextProvider> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </UsersContextProvider> */}
    </>
  );
}

export default App;
