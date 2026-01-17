import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import DirectorContainer from './pages/DirectorContainer.jsx'
import DirectorList from './pages/DirectorList.jsx'
import DirectorCard from './pages/DirectorCard.jsx'
import DirectorForm from './pages/DirectorForm.jsx'
import MovieForm from './pages/MovieForm.jsx'
import MovieCard from './pages/MovieCard.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Public / static pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Directors parent route */}
        <Route path="/directors" element={<DirectorContainer />}>
          {/* Nested routes under /directors */}
          <Route index element={<DirectorList />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />}>
            {/* Nested routes under /directors/:id */}
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>

        {/* Wildcard / 404 handling */}
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
