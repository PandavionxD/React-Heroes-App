import { useState } from "react";
import { Title } from "../../components/Title";
import { Link, useNavigate } from "react-router-dom";
import { heroes } from "../../data/Heros";
import {enqueueSnackbar} from 'notistack'

export const SearchPage = () => {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const [heroes1, setheroes1] = useState();

  const noti = (msj='',variant='info') =>{
    enqueueSnackbar(msj,{
      anchorOrigin:{
        vertical: 'top',
        horizontal: 'right',
      },
      variant: variant
    })
  } 


  const handlesubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) return  noti('Error, Escribe algo','error') ;
    setheroes1(
      heroes.filter((hero) => {
        const a = value.trim().toLowerCase();
        return hero.superhero.toLowerCase().includes(a);
      })
    );
    noti('Busqueda Realizada','info')
    setvalue("");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="grid gap-5 grid-cols-2 my-3 h-48 container">
        <div>
          <Title title="Buscador" />
          <form onSubmit={handlesubmit}>
            <label htmlFor="hero" className="text-lg ">
              Buscar Heroe:
            </label>
            <input
              onChange={(e) => setvalue(e.target.value)}
              value={value}
              type="text"
              autoComplete="off"
              placeholder="Batman..."
              className="py-2 rounded-md px-4 text-indigo-600 outline-none border border-indigo-600 my-3 block w-full "
              id="hero"
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="w-1/2 outline outline-1 outline-indigo-600 py-2 px-4 text-white bg-indigo-600 text-lg rounded-md font-semibold hover:text-indigo-600 hover:bg-white transition-all duration-500 "
              >
                Buscar
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="w-1/2 outline outline-1 outline-red-600 py-2 px-4 text-white bg-red-600 text-lg rounded-md font-semibold hover:text-red-600 hover:bg-white transition-all duration-500 "
              >
                Atrás
              </button>
            </div>
          </form>
        </div>
        <div>
          <Title title="Resultados" />

          {heroes1 === undefined && (
            <div className="bg-indigo-400 w-full flex items-center h-20 p-3  my-3 text-lg rounded-md justify-center container">
              <p className="text-indigo-800"> Nínguna busqueda</p>
            </div>
          )}

          {heroes1?.length === 0 && (
            <div className="bg-red-400 w-full flex items-center h-20 p-3  my-3 text-lg rounded-md justify-center container">
              <p className="text-red-800">No hay resultados</p>
            </div>
          )}

          {heroes1?.length >= 1 &&
            heroes1.map((hero) => (
              <section key={hero.id} className="my-5 grid place-content-center gap-1 mb-14 animate__animated animate__fadeInUp" >
                <picture className="w-72" >
                <img src={`assets/heroes/${hero.id}.jpg`} alt={hero.id} />
                </picture>
                <h2 className="text-2xl text-center text-indigo-600" >
                  {hero.superhero}
                </h2>
                <p className="text-center" >
                  <span className="me-2 font-semibold" >
                    Editorial:
                  </span>
                  {hero.publisher}
                </p>
                <Link to={`/hero/${hero.id}`} className="w-full block text-center outline outline-indigo-600 outline-1 rounded-md text-white bg-indigo-600
        py-1 px-2 text-md hover:text-indigo-600 hover:bg-white transition-all duration-500" > Ver más</Link>
              </section>
            ))}
        </div>
      </div>
    </>
  );
};
