import {useState, useEffect} from 'react'
 import { getFilmsFromTMdbWithText } from '../TMDBApi.js';
function Film({ poster, abstract }) {
    

 return (
  <div className="film">
    <img src={`https://image.tmdb.org/t/p/w300${ poster }`} alt="poster du    
        film" />

    <img src={poster} alt="Film Poster" />
    <p>{abstract}</p>
      </div>
);
}
   
     function List() {	
            
        const [films, setFilms] = useState([])
               const search = useParams()
            useEffect() => {
                getFilmsFromTMdbWithText(search.data, 1)
                .then(data => {setFilms(data.results)})
    }

                
   
       return (
         <div className="container">
            <h2>Liste des films</h2>
            <p>{search.data}</p> 
     {films.map((film) => {
       return (
        <Film key={film.id} poster={film.poster_path} 
          					abstract={film.overview} />
        
       )}
     )}
  </div>
);
     }
     export default List;
   