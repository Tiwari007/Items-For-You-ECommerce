import { React } from "react";
import Navigation from "./components/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};

export default Layout;
