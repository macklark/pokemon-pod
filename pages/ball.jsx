import Image from "next/image";
import Head from "next/head";

export default function Ball({ pokemon }) {
  return (
    <>
      <Head>
        <title>{pokemon.name} | Pokemon-pod</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="macklark" />
        <meta name="description" content="info about every single pokemon" />
      </Head>
      <main className="flex justify-center">
        <div className="w-11/12 md:w-1/2 xl:w-1/4 mt-12 md:mt-28 px-10 md:py-5 py-3 rounded-2xl shadow-xl">
          <div className="flex justify-center">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="capitalize text-lg font-bold text-gray-900 mr-2">
              {pokemon.name}
            </p>
            {pokemon.types[0].type.name == "grass" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="green"
              >
                <path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "fire" && (
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="orange"
              >
                <path d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 4.336-6.423z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "water" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="blue"
              >
                <path d="M12 0c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm-.027 5.12c.467.725 1.027 1.987 1.027 3.32 0 3.908-4 4.548-4 2.17 0-1.633 1.988-4.044 2.973-5.49z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "bug" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="brown"
              >
                <path d="M7.074 1.408c0-.778.641-1.408 1.431-1.408.942 0 1.626.883 1.38 1.776-.093.336-.042.695.138.995.401.664 1.084 1.073 1.977 1.078.88-.004 1.572-.408 1.977-1.078.181-.299.231-.658.138-.995-.246-.892.436-1.776 1.38-1.776.79 0 1.431.63 1.431 1.408 0 .675-.482 1.234-1.118 1.375-.322.071-.6.269-.769.548-.613 1.017.193 1.917.93 2.823-1.21.562-2.524.846-3.969.846-1.468 0-2.771-.277-3.975-.84.748-.92 1.555-1.803.935-2.83-.168-.279-.446-.477-.768-.548-.636-.14-1.118-.699-1.118-1.374zm13.485 14.044h2.387c.583 0 1.054-.464 1.054-1.037s-.472-1.037-1.054-1.037h-2.402c-.575 0-1.137-.393-1.227-1.052-.092-.677.286-1.147.765-1.333l2.231-.866c.541-.21.807-.813.594-1.346-.214-.533-.826-.795-1.367-.584l-2.294.891c-.329.127-.734.036-.926-.401-.185-.423-.396-.816-.62-1.188-1.714.991-3.62 1.501-5.7 1.501-2.113 0-3.995-.498-5.703-1.496-.217.359-.421.738-.601 1.146-.227.514-.646.552-.941.437l-2.295-.89c-.542-.21-1.153.051-1.367.584-.213.533.053 1.136.594 1.346l2.231.866c.496.192.854.694.773 1.274-.106.758-.683 1.111-1.235 1.111h-2.402c-.582 0-1.054.464-1.054 1.037s.472 1.037 1.054 1.037h2.387c.573 0 1.159.372 1.265 1.057.112.728-.228 1.229-.751 1.462l-2.42 1.078c-.53.236-.766.851-.526 1.373s.865.753 1.395.518l2.561-1.14c.307-.137.688-.106.901.259 1.043 1.795 3.143 3.608 6.134 3.941 2.933-.327 5.008-2.076 6.073-3.837.261-.432.628-.514.963-.364l2.561 1.14c.529.236 1.154.005 1.395-.518.24-.522.004-1.137-.526-1.373l-2.42-1.078c-.495-.221-.867-.738-.763-1.383.128-.803.717-1.135 1.276-1.135z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "normal" && (
              <p className="text-xs z-40">normal</p>
            )}
            {pokemon.types[0].type.name == "fighting" && (
              <p className="text-xs z-40">fighting</p>
            )}
            {pokemon.types[0].type.name == "rock" && (
              <p className="text-xs z-40 text-gray-300">rock</p>
            )}
            {pokemon.types[0].type.name == "poison" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="purple"
              >
                <path d="M12 16c2.947 0 5.333-2.365 5.333-5.284 0-2.917-2.087-5.918-5.333-10.716-3.246 4.798-5.332 7.799-5.332 10.716 0 2.919 2.385 5.284 5.332 5.284zm-.018-12.587c.311.484.685 1.325.685 2.213 0 2.606-2.667 3.033-2.667 1.447 0-1.088 1.326-2.696 1.982-3.66zm.018 16.587c-2.367 0-5.711-.614-7.285-2.356.473-.294 1.15-.61 2.021-.889.923.589 2.702 1.245 5.264 1.245s4.341-.656 5.265-1.245c.87.278 1.548.595 2.022.889-1.574 1.742-4.92 2.356-7.287 2.356zm11.997-2c0 3.313-5.37 6-11.997 6-6.625 0-11.997-2.687-11.997-6l.003-.126c.043-1.009.615-1.921 1.505-2.398s1.965-.448 2.829.074l.023.014c-1.513.763-2.361 1.678-2.361 2.436 0 1.631 3.895 4 9.998 4s9.998-2.369 9.998-4c0-.757-.847-1.671-2.358-2.436l.021-.012c.877-.529 1.969-.548 2.864-.052s1.458 1.434 1.472 2.458v.042zm-4.999-4.031c1.453-1.406 3.064-.182 4.402-1.477.418-.403.603-.902.603-1.384 0-1.279-1.481-2.261-3.021-1.436-1.234.661-1.921 2.349-1.984 4.297zm.178-5.067c.63-1.037 1.749-.57 2.329-1.524.688-1.133-.729-2.29-1.829-1.269-.615.57-.76 1.654-.5 2.793zm-16.153.77c-1.539-.825-3.021.157-3.021 1.436 0 .482.185.98.602 1.384 1.338 1.295 2.95.071 4.402 1.477-.062-1.948-.748-3.636-1.983-4.297zm1.307-3.563c-1.1-1.021-2.518.136-1.83 1.269.58.954 1.699.487 2.33 1.524.259-1.139.115-2.223-.5-2.793z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "electric" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="yellow"
              >
                <path d="M9.417 0h6.958l-3.375 8h7l-13 16 4.375-11h-7.375z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "ground" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="brown"
              >
                <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "fairy" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="pink"
              >
                <path d="M3 16l-3-10 7.104 4 4.896-8 4.896 8 7.104-4-3 10h-18zm0 2v4h18v-4h-18z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "psychic" && (
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="yellow"
              >
                <path d="M24 11.374c0 4.55-3.783 6.96-7.146 6.796-.151 1.448.061 2.642.384 3.641l-3.72 1.189c-.338-1.129-.993-3.822-2.752-5.279-2.728.802-4.969-.646-5.784-2.627-2.833.046-4.982-1.836-4.982-4.553 0-4.199 4.604-9.541 11.99-9.541 7.532 0 12.01 5.377 12.01 10.374zm-21.992-1.069c-.145 2.352 2.179 3.07 4.44 2.826.336 2.429 2.806 3.279 4.652 2.396 1.551.74 2.747 2.37 3.729 4.967l.002.006.111-.036c-.219-1.579-.09-3.324.36-4.528 3.907.686 6.849-1.153 6.69-4.828-.166-3.829-3.657-8.011-9.843-8.109-6.302-.041-9.957 4.255-10.141 7.306zm8.165-2.484c-.692-.314-1.173-1.012-1.173-1.821 0-1.104.896-2 2-2s2 .896 2 2c0 .26-.05.509-.141.738 1.215.911 2.405 1.855 3.6 2.794.424-.333.96-.532 1.541-.532 1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-1.171 0-2.155-.807-2.426-1.895-1.201.098-2.404.173-3.606.254-.17.933-.987 1.641-1.968 1.641-1.104 0-2-.896-2-2 0-1.033.784-1.884 1.79-1.989.12-.731.252-1.46.383-2.19zm2.059-.246c-.296.232-.66.383-1.057.417l-.363 2.18c.504.224.898.651 1.079 1.177l3.648-.289c.047-.267.137-.519.262-.749l-3.569-2.736z" />
              </svg>
            )}
            {pokemon.types[0].type.name == "ice" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="lightblue"
              >
                <path d="M12 9.312l-1.762.491 1.562.881-.491.871-1.562-.881.491 1.762-.963.268-.76-2.724-2.015-1.126v1.939l2 2-.707.707-1.293-1.293v1.793h-1v-1.793l-1.293 1.293-.707-.707 2-2v-1.939l-2.015 1.126-.761 2.724-.963-.268.491-1.762-1.562.882-.491-.871 1.562-.881-1.761-.492.269-.962 2.725.76 1.982-1.11-1.983-1.109-2.724.759-.269-.962 1.762-.491-1.563-.882.491-.871 1.562.881-.49-1.762.963-.269.76 2.725 2.015 1.128v-1.94l-2-2 .707-.707 1.293 1.293v-1.793h1v1.793l1.293-1.293.707.707-2 2v1.94l2.016-1.127.76-2.725.963.269-.492 1.761 1.562-.881.491.871-1.562.881 1.762.492-.269.962-2.725-.76-1.982 1.11 1.982 1.109 2.725-.76.269.963zm4-5.812v7.525c0 1.57-.514 2.288-1.41 3.049-1.011.859-1.59 2.107-1.59 3.426 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.319-.579-2.567-1.589-3.426-.897-.762-1.411-1.48-1.411-3.049v-7.525c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5zm5 0v7.525c0 .587.258 1.145.705 1.525 1.403 1.192 2.295 2.966 2.295 4.95 0 3.59-2.909 6.5-6.5 6.5s-6.5-2.91-6.5-6.5c0-1.984.892-3.758 2.295-4.949.447-.381.705-.94.705-1.526v-7.525c0-1.934 1.567-3.5 3.5-3.5s3.5 1.566 3.5 3.5zm0 14c0 1.934-1.567 3.5-3.5 3.5s-3.5-1.566-3.5-3.5c0-1.141.599-2.084 1.393-2.781 1.01-.889 1.607-1.737 1.607-3.221v-.498h1v.498c0 1.486.595 2.33 1.607 3.221.794.697 1.393 1.64 1.393 2.781z" />
              </svg>
            )}
          </div>
          <div className="flex justify-center md:mt-5 mt-3">
            <p className="text-white px-3 py-2 rounded-xl bg-gradient-to-r from-green-200 to-blue-200">
              XP {pokemon.base_experience}
            </p>
          </div>
          <div className="mt-10 flex justify-between items-center">
            <div>
              <p className="uppercase tracking-wider text-md text-gray-900">
                Weight
              </p>
              <p className="text-blue-400">{pokemon.weight} kg</p>
            </div>
            <div>
              <p className="uppercase tracking-wider text-md text-gray-900">
                Height
              </p>
              <p className="text-blue-400">{pokemon.height} m</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="uppercase tracking-wider text-md text-gray-900">
              Powers
            </p>
            {pokemon.abilities.slice(0, 3).map((ability, index) => {
              return (
                <p className="text-blue-400 capitalize" key={index}>
                  {ability.ability.name}
                </p>
              );
            })}
          </div>
        </div>
      </main>
    </>
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
