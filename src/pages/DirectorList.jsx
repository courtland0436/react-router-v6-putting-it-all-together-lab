import { Link, useOutletContext } from 'react-router-dom'

const DirectorList = () => {
  const { directors } = useOutletContext()

  return (
    <ul>
      {directors.map(director => (
        <li key={director.id}>
          <Link to={`/directors/${director.id}`}>
            {director.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DirectorList
