import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./pages/Navigation";
import Footer from "./pages/Footer";
import Categories from "./pages/data-categories/categories";
import { DataProvider } from "./pages/data-categories/data";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("hellp");
  }, [Route]);

  return (
    <Router>
      <Navigation></Navigation>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/Categories" element={<Categories />}></Route>

          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>{" "}
      </DataProvider>
      <Footer></Footer>
    </Router>
  );
}
