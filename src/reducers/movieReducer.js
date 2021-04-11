
import uuid from 'uuid/dist/v1';

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {
        title: action.movie.title, 
        genre: action.movie.genre, 
        language: action.movie.language,
        id: uuid()}
      ]
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
} 