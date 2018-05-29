export function updateUserData(index, data) {
  return {
    type: 'UPDATE_USER_DATA',
    index,
    data
  }
}

export function updateArticles(data) {
  return {
    type: 'UPDATE_ARTICLES',
    data
  }
}
