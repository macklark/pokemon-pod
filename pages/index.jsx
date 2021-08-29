// Next.js imports
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Other imports
import Logo from "../public/icons/logo.png";
import Fuse from "fuse.js";

// React.js imports
import { useState } from "react";

// Landing Home page logo
function PokemonLogo() {
  return (
    <div className="h-screen">
      <div className="hidden md:block absolute left-1/2 top-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-50 animate-bubble"></div>
      <div className="hidden md:block absolute top-1/2 right-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-bubble opacity-0 md:opacity-50"></div>
      <div className="hidden md:block absolute top-1/2 right-1 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-bubble opacity-0 md:opacity-50 animation-delay-4000"></div>
      <div className="hidden md:block absolute top-1 left-1 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-bubble opacity-0 md:opacity-50"></div>
      <div className="hidden md:block absolute top-1 right-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-bubble opacity-0 md:opacity-50"></div>
      <div className="absolute md:left-1/4 md:transform md:translate-x-1/4">
        <Image src={Logo} alt="pokemon logo" width={550} height={550} />
        <div className="flex justify-center">
          <label className="mr-5">Scroll down</label>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="animate-bounce"
          >
            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card({ pokeCard }) {
  return (
    <Link href={`/ball/?id=${pokeCard.identity}`}>
      <a className="p-10 flex items-center rounded border-2 border-gray-200 hover:border-0 hover:shadow-lg transition duration-300">
        <Image
          src={pokeCard.image}
          alt={pokeCard.name}
          width={100}
          height={100}
        />
        <p className="ml-5 text-3xl font-bold">{pokeCard.name}</p>
      </a>
    </Link>
  );
}

function Cards({ pokeCards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto container w-11/12 md:w-3/4 mb-10 gap-2">
      {pokeCards.map((card, index) => {
        return (
          <div key={card.name}>
            <Card pokeCard={card} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default function Home({ pokemon }) {
  const [query, setQuery] = useState("");
  const [pokePerPage, setPokePerPage] = useState(9);

  const fuse = new Fuse(pokemon, {
    keys: ["name"],
  });

  const searchResults = fuse.search(query);
  const pokeResults = query
    ? searchResults.map((result) => result.item)
    : pokemon;

  const searchHandler = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };

  const currentPokeCards = pokeResults.slice(0, pokePerPage);

  const showMoreHandler = () => {
    setPokePerPage((prevValue) => prevValue + 9);
  };

  return (
    <div>
      <Head>
        <title>Pokemon Pod</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PokemonLogo />
        <div className="mx-auto w-11/12 md:w-3/4 container mt-10 flex justify-center">
          <input
            placeholder="🔍 Search..."
            className="p-3 w-full focus:outline-none focus:ring focus:border-blue-300 rounded border-2 border-gray-200 mb-5"
            value={query}
            onChange={searchHandler}
          />
        </div>
        {currentPokeCards.length == 0 && (
          <p className="bg-red-300 p-2 mx-auto w-11/12 md:w-1/2 container flex justify-center border-2 border-red-600 rounded">
            No results found !
          </p>
        )}
        <Cards pokeCards={currentPokeCards} />
        <div className="flex justify-center mb-5">
          {currentPokeCards.length > 8 && (
            <button
              className="px-4 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={showMoreHandler}
            >
              Load more
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const fetcher = await fetch("https://pokeapi.co/api/v2/pokemon?limit=300");
    const { results } = await fetcher.json();

    const imageSubstitute = results.map((result, index) => {
      const indexer = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indexer}.png`;
      const identity = index + 1;

      return {
        ...result,
        image,
        identity,
      };
    });

    return {
      props: { pokemon: imageSubstitute },
    };
  } catch (err) {
    console.log(err);
  }
}