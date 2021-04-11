import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({movie}) =>{
 const { dispatch }  = useContext (MovieContext);

 return(
     <li onClick={()=>dispatch({ type: 'REMOVE_MOVIE', id: movie.id })}>
         <div className="title">{movie.title}</div>
         <div className="genre">{movie.genre}</div>
         <div className="language">{movie.language}</div>
     </li>
 );
} 
export default MovieDetails;
