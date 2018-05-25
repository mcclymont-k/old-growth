export function updateUserData(index, data) {
  return {
    type: 'UPDATE_USER_DATA',
    index,
    data
  }
}
