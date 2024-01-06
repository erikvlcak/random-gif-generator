import { useState } from 'react'
import searchIcon from '../src/searchIcon.svg'

function MemeImage() {
  let [memeUrl, setMemeUrl] = useState('')
  let [keyword, setKeyword] = useState('')

  let changeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  let changeMeme = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=rLV4XfJJoFueXHpX2lr3gMFzwlvnNgoK&tag=${keyword}&rating=g`,
      { mode: 'cors' }
    )
      .then((fetchedData) => fetchedData.json())
      .then((fetchedData) => setMemeUrl(fetchedData.data.images.original.url))
  }

  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4 justify-between">
        <label htmlFor="search">Category:</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter GIF category"
          autoComplete="off"
          className="border-orange-300"
          onChange={changeKeyword}
        />
        <button type="button">
          <img src={searchIcon} onClick={changeMeme} alt="search icon" />
        </button>
      </div>

      <div>
        {memeUrl ? <img src={memeUrl} alt="meme image" /> : <h1>Welcome!</h1>}
      </div>

      {/* <button type="button">
        {memeUrl ? <p>Click to change</p> : <p>Click to generate</p>}
      </button> */}
    </main>
  )
}

export default MemeImage
