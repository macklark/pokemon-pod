import Image from "next/image";
import Head from "next/head";

export default function Ball({ pokemon }) {
  return (
    <div className="container mx-auto md:mt-10 md:mt-32 block md:flex md:justify-center divide-x divide-white">
      <Head>
        <title>{pokemon.name} | Pokemon Pod</title>
      </Head>
      <div className="bg-gradient-to-br from-red-500 via-black to-white p-10 md:rounded-l-lg">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          height={500}
          width={500}
        />
      </div>
      <div className="bg-gray-200 p-10 md:rounded-r-lg">
        <p className="text-center md:text-left md:text-6xl font-bold md:ml-5 text-3xl text-gray-600">
          {pokemon.name}
        </p>
        <p className="text-center md:text-left md:text-2xl md:ml-5 text-xl text-gray-500 mt-2">
          Weight : {pokemon.weight} kg
        </p>
        <p className="text-center md:text-left md:text-2xl md:ml-5 text-xl text-gray-500 mt-5 mb-4 font-bold">
          Type
        </p>
        {pokemon.types.map((type, index) => {
          return (
            <ul
              key={index}
              className="text-center md:text-left md:ml-6 text-md text-gray-500"
            >
              <li>{type.type.name}</li>
            </ul>
          );
        })}
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
