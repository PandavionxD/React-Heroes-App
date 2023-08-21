import { Link } from "react-router-dom"

export const HeroItem = ({hero}) => {
  return (
    <div className="mx-auto shadow-md rounded-md p-3" > 
        <picture>
            <img src={`assets/heroes/${hero.id}.jpg`} alt={hero.id} />
        </picture>
        <h2 className="text-center my-2 text-indigo-600 text-lg" >{hero.superhero}</h2>
        <Link to={`/hero/${hero.id}`} className="w-full block text-center outline outline-indigo-600 outline-1 rounded-md text-white bg-indigo-600
        py-1 px-2 text-md hover:text-indigo-600 hover:bg-white transition-all duration-500
        " >
            Ver más
        </Link>
    </div>
  )
}
