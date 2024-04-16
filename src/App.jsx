import { Outlet } from "react-router-dom";
import { TrailsContextProvider } from "./context/trailsContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <TrailsContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </TrailsContextProvider>
    </>
  );
}

export default App;
