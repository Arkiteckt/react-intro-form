import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



const MovieForm = (props) => {
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [actors, setActors] = useState("")
  const [plot, setPlot] = useState("")
  const [imdbRating, setimdbRating] = useState("0.1")
  const [year, setYear] = useState("0")
  console.log(year, year)
  console.log(imdbRating, imdbRating)
  console.log("plot",plot)
  console.log("actors", actors)
  console.log("director", director)
  console.log("title", title)
  return (
    <div>
      {/*create label Title: and text input*/}
      <label>Title:</label>
      <input type="text" onChange={(event)=>{
        setTitle(event.target.value)
      }}/>
      <label>Director:</label>
      <input type="text" onChange={(event)=>{setDirector(event.target.value)}}/>
      <label>Actors:</label>
      <input type="text" onChange={(event)=>{setActors(event.target.value)}}/>
      <label>Plot:</label>
      <input type="text" onChange={(event)=>{setPlot(event.target.value)}}/>
      <label>imdbRating:</label>
      <input type="number" step="0.1" />
      <label>Year:</label>
      <input type="number" step= "0"/>
      <p>Current Title: {title}</p>
    </div>
  )
}

function App() {
  const [movieList, setMovieList] = useState("")////Part 2 #5
  console.log(movieList, movieList)
  const handleAddMovie = (newMovie)=>{////Part 2 #5
  const movieListCopy = [...movieList];
  movieListCopy.push("newMovie");
  setMovieList("movieListCopy") 
  } 
  return (
    <div className="App App-header">
    <MovieForm handleAddMovie={handleAddMovie}/>
    <MoviesDisplay/>

    <button onClick={(props)=>{
      const newMovie = {
        ...movieList,
        title: "",
        director: "",
        plot: ""
      };
      props.handleAddMovie("newMovie");
    }}>Add Movie</button> 
    
</div>
  );
}
export default App;



// ***************PROBLEM 6 ***********/
const MoviesDisplay = (props)=> {
  const [movieList, setMovieList] = useState("")
  return <div> {props.movieList.map((movie,index)=>{
    return(
      <MovieItem movie={movie} key={index}/>
    )
  })}</div>;
  
}

const MovieItem = (props)=> {// do i need to define a variable above the return statement
  return <div>Hello, {props.movie}
  <h2>Title: {props.movie.title}</h2>
		<p>Director: {props.movie.director}</p>
  </div>;
  
}




