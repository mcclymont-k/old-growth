export function updateUserData(index, data) {
  console.log(data)
  return {
    type: 'UPDATE_USER_DATA',
    index,
    data
  }
}
