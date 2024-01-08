/* eslint-disable react/prop-types */
function MemeImage(props) {
  return (
    <div className="shadow-2xl md:mt-20">
      {props.memeUrl ? (
        <img src={props.memeUrl} alt="meme image" />
      ) : (
        <h1>No GIFs in this category.</h1>
      )}
    </div>
  )
}

export default MemeImage
