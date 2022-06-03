interface IUsersState {
  users: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  errorMessage: string
  editMode: boolean
  idToBeEdited: number | null
}

export default IUsersState;
