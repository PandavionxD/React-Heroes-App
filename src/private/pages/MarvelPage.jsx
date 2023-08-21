import React from "react";
import { HeroesList, Title } from "../../components";
import { heroes } from "../../data/Heros";


export const MarvelPage = () => {

  const marvel = heroes.filter(hero => hero.publisher === 'Marvel Comics')

  return (
      <>
        <Title title="Marvel Comics" />
        <HeroesList heroes={marvel} />
      </>
    );
};

