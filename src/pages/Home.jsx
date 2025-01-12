import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      release_date: "1994",
    },
    {
      id: 2,
      title: "The Godfather",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      release_date: "1995",
    },
    {
      id: 3,
      title: "The Dark Knight",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      release_date: "2008",
    },
    {
      id: 4,
      title: "The Dark Knight Rises",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      release_date: "2012",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  const handleSearch = (event) => {
    alert("Search for " + searchTerm);
    event.preventDefault();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
