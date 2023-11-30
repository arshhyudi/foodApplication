// import logo from './logo.svg';
// import "./App.css";
import About from "./component/About";

import Body from "./component/Body";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import {Outlet} from "react-router-dom"
const App = () => {
  return (
    <>
      <Header />
     <Outlet/>
      {/* <Body /> */}
      
      <Footer />
    </>
  );
};

export default App;
