import { useState } from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import { classes } from "./styles.module.css";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
