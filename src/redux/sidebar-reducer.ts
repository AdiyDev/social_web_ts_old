type friendType = {
  id: number
  name: string
}

const initialState = {
  friends: [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' }
  ] as Array<friendType>
}

export type initialStateType = typeof initialState
const sidebarReducer = (
  state = initialState,
  action: actionType
): initialStateType => {
  return state
}

type actionType = {
  type: any
}

export default sidebarReducer
