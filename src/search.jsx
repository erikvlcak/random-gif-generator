import { useState } from 'react'
import searchIcon from '../src/searchIcon.svg'
import MemeImage from './image'

function Search() {
  let [memeUrl, setMemeUrl] = useState(
    'https://media1.giphy.com/media/bcKmIWkUMCjVm/giphy.gif?cid=ecf05e473222cwc2pwi05eg0310kj7mia96wb7p1euaa29ln&ep=v1_gifs_search&rid=giphy.gif&ct=g'
  )
  let [keyword, setKeyword] = useState('random')

  let changeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  let changeMeme = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=rLV4XfJJoFueXHpX2lr3gMFzwlvnNgoK&tag=${keyword}&rating=g`,
      { mode: 'cors' }
    )
      .then((fetchedData) => fetchedData.json())
      .then((fetchedData) => {
        if (fetchedData.data.length != 0) {
          setMemeUrl(fetchedData.data.images.original.url)
        } else {
          setMemeUrl('')
        }
      })
  }

  return (
    <main className="flex  flex-col items-center mb-auto">
      <div className="flex flex-col md:flex-row items-center gap-6 mt-10 mb-10 min-w-0">
        <label
          htmlFor="search"
          className="font-bold text-base md:text-3xl flex items-center"
        >
          Category:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Random GIF"
          autoComplete="off"
          className="border-black border-b-2 focus:outline-none text-base md:text-3xl w-2/3 md:min-w-fit"
          onChange={changeKeyword}
        />
        <button
          onClick={changeMeme}
          type="button"
          className="bg-pink-300 p-4 w-2/3 md:w-fit rounded-xl drop-shadow-xl border-none border-0 active:bg-pink-500 transition-all"
        >
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
      <MemeImage memeUrl={memeUrl} />
    </main>
  )
}

export default Search
