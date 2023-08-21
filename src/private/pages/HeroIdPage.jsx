import { useNavigate, useParams } from "react-router-dom";
import { heroes } from "../../data/Heros";
import { useEffect, useState } from "react";
import { Title } from "../../components";

export const HeroIdPage = () => {
  const [hero, sethero] = useState();
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const hero1 = heroes.find((hero) => hero.id === id);
    sethero(hero1);
  }, [id]);

  const handleBack = ()=>{
    navigate(-1);
  }

  return (
    <div className="container w-full mb-12">
      <div className="grid grid-cols-5 gap-5 mt-5 p-5">
        {hero && (
          <>
            <picture className="col-span-2 ">
              <img
                className="object-contain "
                src={`/assets/heroes/${hero.id}.jpg`}
                alt={hero.id}
              />
            </picture>
            <div className="col-span-3 p-3 text-md flex flex-col gap-4 shadow-md rounded-md" >
              <Title title={hero.superhero} />
              <p className="text-lg" >
                <span className="font-bold me-2" >
                  Editorial: 
                </span>
                {hero.publisher}
              </p>
              <p className="text-lg">
                <span className="font-bold me-2">
                  Nombre:  
                </span>
                {hero.alter_ego}
              </p>
              <p className="text-lg">
                <span className="font-bold me-2">
                  Primera aparicion:  
                </span>
                {hero.first_appearance}
              </p>
              <p className="font-bold me-2 text-lg">
                Caracteres:
              </p>
              <p className="text-lg" >
                {hero.characters}
              </p>
              <button className="w-48 outline outline-1 outline-indigo-600 py-2 px-4 text-white bg-indigo-600 text-lg rounded-md font-semibold hover:text-indigo-600 hover:bg-white transition-all duration-500 " onClick={handleBack} >
                Atrás
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
