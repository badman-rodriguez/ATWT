// getters
export const movieTitle  = state => {
  return state.movie.title ? state.movie.title : ''
}

export const movieDate  = state => {
  return state.movie.release ? state.movie.release : ''
}

export const rating  = state => {
  return state.movie.rating ? state.rating : ''
}

export const movie  = state => {
  return state.movie ? state.movie : {}
}

export const recipes = state => state.recipes;
