// getters
export const movieTitle  = state => {
  return state.movieTitle ? state.movieTitle : ''
}

export const movieDate  = state => {
  return state.movieDate ? state.movieDate : ''
}

export const rating  = state => {
  return state.rating ? state.rating : ''
}

export const movie  = state => {
  return state ? state : {}
}
