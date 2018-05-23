export function updateUser(state=[], action) {
  switch(action.type) {
    case 'UPDATE_USER_DATA' :
    console.log(state)
      state = action.data
      return state

    default:
      return state
  }
}
