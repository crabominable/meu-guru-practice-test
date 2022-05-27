interface IUsersState {
  users: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  errorMessage: string
}

export default IUsersState;
