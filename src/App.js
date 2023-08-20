import { createContext, useReducer, useState } from "react";
import {
  initialMovie,
  movieReducer,
} from "./Components/Movie Reducer/movieReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";

import { Header } from "./Components/Fixed Components/Header/Header";
import { Footer } from "./Components/Fixed Components/Footer/Footer";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Favorites } from "./Pages/Favorites";
import { Genre } from "./Pages/Genre";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export const MyContaxt = createContext();

function App() {
  const [state, dispatch] = useReducer(movieReducer, initialMovie);

  let like = (id) => {
    dispatch({ type: "isLike", id });
  };

  let signUp = (user) => {
    dispatch({
      type: "signUp",
      user,
    });
  };

  let currentUser = (currUser) => {
    dispatch({ type: "currUser", currUser });
  };

  return (
    <MyContaxt.Provider
      value={{
        movies: state.movies,
        users: state.users,
        currUser: state.currUser,
        like,
        signUp,
        currentUser,
      }}
    >
      <BrowserRouter>
        <div className=" bg-secondary-subtle ">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" exatc element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Genre/:genre" element={<Genre data={state} />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </MyContaxt.Provider>
  );
}

export default App;
