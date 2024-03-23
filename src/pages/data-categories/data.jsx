// DataContext.js
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const data = [
    {
      img: "src/assets/americanblackbear.jpg",
      name: "polarbear",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/andean bear.jpg",
      name: "polar",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/asian black bear.jpg",
      name: "polarbear",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/brown bear.jpg",
      name: "polar",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/panda.jpg",
      name: "polarbear",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/polarbear.jpg",
      name: "polar",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/slothbear.jpg",
      name: "polarbear",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "src/assets/sunbear.jpgg",
      name: "polarbear",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },
    {
      img: "../assets/sunbear.jpg",
      name: "polarbear",
      place: "articcircle",
      description:
        "this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores aliquid dignissimos velit impedit autem recusandae minima consequuntur repellendus porro dicta culpa cumque quos eos veritatis cum, qui ex aut.the might polar bear. ",
    },

    // Add more objects as needed
  ];

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
