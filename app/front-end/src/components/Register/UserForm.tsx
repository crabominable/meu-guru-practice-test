import React, { useState } from 'react';
// import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import loginSchema from './components/userSchema';
import { createUser, getAllUsers } from '../../thunk/userThunk';
import { AppDispatch } from '../../store';

import './UserForm.css';

function UserInput() {
  const [able, setAble] = useState(true);
  const [err, setError] = useState(false);

  const dispatch: AppDispatch = useDispatch();

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

    onSubmit: async (values) => {
      dispatch(createUser({ ...values }));
      dispatch(getAllUsers());
    },
  });

  return (
    <form className="userform-container" onSubmit={formik.handleSubmit}>
      <div className="userform-inputs-container">
        <label className="userform-label-content" htmlFor="name">
          Nome:
          <input
            className="userform-input-content"
            type="text"
            placeholder="Nome"
            id="name"
            {...formik.getFieldProps('name')}
          />
        </label>
        <label className="userform-label-content" htmlFor="email">
          Email:
          <input
            className="userform-input-content"
            type="text"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
        </label>
        <label className="userform-label-content" htmlFor="password">
          Senha:
          <input
            className="userform-input-content"
            placeholder="Senha"
            type="password"
            id="password"
            {...formik.getFieldProps('password')}
          />
        </label>
      </div>
      <button
        className="userform-submit-button"
        type="submit"
        disabled={able}
      >
        Registrar
      </button>
      {
        err && <span>Email ou senha inválidos</span>
      }
    </form>
  );
}

export default UserInput;
