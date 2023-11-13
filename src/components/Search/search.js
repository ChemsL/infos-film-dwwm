import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const searchValue = formData.get('search');
    setSearchData(searchValue);
    // Rediriger l'utilisateur avec la valeur de recherche dans la chaîne de requête
    navigate(`/list/?search=${searchValue}`);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="idSearch">Votre recherche</label>
          <input id="idSearch" name="search" type="text" />
        </fieldset>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
}

export default Search;


