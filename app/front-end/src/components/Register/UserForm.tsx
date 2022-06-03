import React, { useState } from 'react';
// import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import loginSchema from './components/userSchema';
import { createUser, getAllUsers, updateUser } from '../../thunk/userThunk';
import { AppDispatch } from '../../store';
import { setEditMode } from '../../redux/userSlice';

import './UserForm.css';

function UserInput() {
  const [able, setAble] = useState(true);
  const [err, setError] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const { editMode, idToBeEdited } = useSelector((state: any) => state.UserSlice);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: (values) => {
      setError(false);
      const { error } = loginSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      return setAble(false);
    },

    // eslint-disable-next-line consistent-return
    onSubmit: async (values) => {
      if (editMode === true) {
        dispatch(updateUser({ id: idToBeEdited, data: values }));
        dispatch(setEditMode(false));
        return dispatch(getAllUsers());
      }
      dispatch(createUser({ ...values }));
      dispatch(getAllUsers());
    },
  });

  return (
    <form className="userform-container" onSubmit={formik.handleSubmit}>
      <div className="userform-inputs-container">
        <input
          className="userform-input-content"
          type="text"
          placeholder="Nome"
          id="name"
          {...formik.getFieldProps('name')}
        />
        <input
          className="userform-input-content"
          type="text"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        <input
          className="userform-input-content"
          placeholder="Senha"
          type="password"
          id="password"
          {...formik.getFieldProps('password')}
        />
      </div>
      <button
        className="userform-submit-button"
        type="submit"
        disabled={able}
      >
        { !editMode ? 'Registrar' : 'Atualizar' }
      </button>
      {
        err && <span>Email ou senha inválidos</span>
      }
    </form>
  );
}

export default UserInput;
