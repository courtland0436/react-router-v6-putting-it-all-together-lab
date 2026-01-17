import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch directors')
        return r.json()
      })
      .then(setDirectors)
      .catch(console.log)
  }, [])

  return (
    <main>
      <h1>Welcome to the Director's Directory!</h1>
      {/* Pass directors state and setter to nested routes */}
      <Outlet context={{ directors, setDirectors }} />
    </main>
  )
}

export default DirectorContainer
