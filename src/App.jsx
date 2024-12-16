import './App.css'
import MovieCard from './Components/Moviecard'

function App() {
 

  return (
    <>
      <MovieCard movie={{title: "Hello world", release_date: "20 dec"}}></MovieCard>
    </>
  )
}

export default App
