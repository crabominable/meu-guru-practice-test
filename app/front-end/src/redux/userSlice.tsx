import { createSlice } from '@reduxjs/toolkit';

import { extraReducers } from '../thunk/userThunk';
import { IUsersState } from '../interfaces';

const initialState = {
  users: [],
  loading: 'idle',
  errorMessage: '',
  editMode: false,
  idToBeEdited: null,
} as IUsersState;

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  extraReducers,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
    setIdToBeEdited: (state, action) => {
      state.idToBeEdited = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsers, setLoading, setErrorMessage, setEditMode, setIdToBeEdited,
} = UserSlice.actions;

export default UserSlice.reducer;
