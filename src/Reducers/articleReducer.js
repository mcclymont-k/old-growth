export function updateArticles(state=[], action) {
  switch(action.type) {
    case 'UPDATE_ARTICLES' :
      state = action.data
      return state

    default:
      return state
  }
}
