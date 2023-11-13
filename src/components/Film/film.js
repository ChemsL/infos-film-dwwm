import './Film.css';
  	
function Film({abstract, poster}) {
    
  return (
    <div className="film">
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} />
      <p>{abstract}</p>
    </div>
  );
}
export default Film;
