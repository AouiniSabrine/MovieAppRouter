import  React,{ useState } from 'react';
import {MovieData} from './MoviesData.js';
import MovieListe from './Components/MovieListe';
import AddMovie from './Components/AddMovie';
import SearchMovie from './Components/SearchMovie';
import './App.css'
import Navbar from "./Components/Navbar";
import MovieDetails from './Components/MovieDetails.js';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home.js';

function App() {
  const[movies,setMovies]=useState(MovieData)
  const [input,setInput]=useState("")
  
  console.log(movies)
  const AddHandler=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
       <Navbar/>
      <SearchMovie setInput={setInput} />
     
      <AddMovie AddHanlder={AddHandler}/>
      <Routes>
        <Route path="/myhome" element={<Home />} />
        <Route path="/movieslists" element={<MovieListe movies={movies} input={input}  />} />
        <Route path="/moviedetails/:idMovie" element={<MovieDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;

