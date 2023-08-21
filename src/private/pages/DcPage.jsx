import { HeroesList, Title } from "../../components"
import { heroes } from "../../data/Heros"

export const DcPage = () => {

  const heros = heroes.filter(hero => hero.publisher === 'DC Comics')

  return (
    <>
    <Title title='Dc Comics' />
    <HeroesList heroes={heros} />
    </>
    )
}
