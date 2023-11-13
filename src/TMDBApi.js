const API_TOKEN = "votre API Key de TMDB";
  	
//le paramètre text = film cherché, page = nombre de page voulu
export function getFilmsFromTMdbWithText (text, page) {
    getFilmsFromTMdbWithText
const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
     "&language=fr&query=" + text + '&page=' + page;	
    
  return fetch(url)
    .then((response) => response.json)
    .catch((error) => console.log(error))
}
