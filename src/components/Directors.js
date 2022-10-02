import React from "react";
import { directors } from "../data";

function Directors() {
  const directorMe = directors.map((director) =>(
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <ul>Movies: {director.movies.map((movie)=>(
       <li key={movie}> {movie}</li>
      ))}</ul>
    </div>
  ))
  return (<div>
<h1>Directors Page</h1>
{directorMe}
  </div>)
}

export default Directors;
