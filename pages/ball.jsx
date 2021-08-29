import Image from "next/image";
import Head from "next/head";

export default function Ball({ pokemon }) {
  return (
    <div className="container mx-auto md:mt-10 md:mt-32 block md:flex md:justify-center divide-x divide-white">
      <Head>
        <title>{pokemon.name} | Pokemon Pod</title>
      </Head>
      <div className="bg-gray-200 rounded-l">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          height={500}
          width={500}
        />
      </div>
      <div className="shadow-lg p-6 md:w-1/4 md:rounded-r-lg">
        <p className="text-center md:text-left md:text-6xl font-bold md:ml-5 text-3xl text-gray-600">
          {pokemon.name}
        </p>
        <div className="md:ml-5 flex justify-between mt-5">
          <p className="font-bold">XP</p>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className="md:ml-5 flex justify-between mt-5">
          <p className="font-bold">HP</p>
          <p>24/60</p>
        </div>
        <div className="mt-5 flex justify-between">
          <div className="text-center px-5 py-2 md:px-0 md:ml-5">
            <p className="text-md font-bold">Weight</p>
            <p>{pokemon.weight} Kg</p>
          </div>
          <div className="text-center px-5 py-2 md:px-0">
            <p className="text-md font-bold">Height</p>
            <p>{pokemon.height} m</p>
          </div>
        </div>
        <div>
          <p className="text-left md:ml-5 font-bold mt-5">Moves</p>
          {pokemon.moves.slice(0, 5).map((move, index) => {
            return (
              <div className="md:ml-5 mt-2" key={index}>
                <p>{move.move.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;

  const fetcher = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await fetcher.json();
  const indexer = ("00" + id).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indexer}.png`;

  result.image = image;

  return {
    props: { pokemon: result },
  };
}
