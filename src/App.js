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
  return (
    <div className="App App-header">
   <MovieForm/>
</div>
  );
}
export default App;


// function App() {

//   const firstName = "Orlando"

//   return (
//     <div className="App">
//       <header className="App-header">
//         {firstName}
//       </header>
//     </div>
//   );
// }

// export default App;

