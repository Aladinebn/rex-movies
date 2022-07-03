/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./component/Add";
import MovieCard from "./component/MovieCard";
import MovieList from "./component/MovieList";
import movieList from "./component/MovieList";
import NavBar from "./component/NavBar";
import Routing from "./component/Routing";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  const [searchRating, setSearchRating] = React.useState(0);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const [addMovie, setAddMovie] = React.useState(movieList);
  function add() {
    setAddMovie([...addMovie, formData]);
  }

  const movies = addMovie
    .filter((item) => {
      return item.rating >= searchRating;
    })
    .filter((item) => {
      return item.title.includes(searchTerm);
    })
    .map((item) => {
      return (
        <div key={item.id} className="bg-nav rounded-2xl pb-5">
          <MovieCard
            id={item.id}
            title={item.title}
            description={item.description}
            posterURL={item.posterURL}
            rating={item.rating}
            trailer={item.trailer}
          />
        </div>
      );
    });

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavBar
            search={handleSearch}
            ratingSearch={searchRating}
            rating={(e) => setSearchRating(e)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="grid grid-cols-5 gap-16 px-16 ">{movies}</div>
                  <Add
                    change={handleChange}
                    add={add}
                    title={formData.title}
                    posterURL={formData.posterURL}
                    description={formData.description}
                    rating={formData.rating}
                  />
                </div>
              }
            />
            <Route path="/:id" element={<Routing mvlist={MovieList} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
