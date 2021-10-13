interface Props {
  characters: {
    mal_id: number
    image_url: string
    name: string
  }[]
}

function Cards({ characters }: Props) {
  return (
    <div className="min-h-screen px-3 md:px-20 py-5 md:py-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-5 auto-rows-auto gap-3 md:gap-5">
        {characters.map((character) => (
          <button key={character.mal_id}>
            <img
              className="w-full min-h-full h-auto rounded-lg"
              src={character.image_url}
              alt={character.name}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Cards
