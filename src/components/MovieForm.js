import React, {useContext, useState} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const NewMovieForm =() =>{
const { dispatch } = useContext(MovieContext);
const [title,setTitle] = useState('');
const [genre,setGenre]= useState('');
const [language,setLanguage]= useState('');

const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch({ type: 'ADD_MOVIE', movie: { title, genre,language }});
    setTitle('');
    setGenre('');
    setLanguage('');
}

return(
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Movie title" value={title}
        onChange={(e)=>setTitle(e.target.value)} required/>
         <input type="text" placeholder="Genre" value={genre}
        onChange={(e)=>setGenre(e.target.value)} required/>
         <input type="text" placeholder="Language" value={language}
        onChange={(e)=>setLanguage(e.target.value)} required/>
        <input type="submit" value="Add movie"/>
    </form>
);
}
export default NewMovieForm;
