import React, { useState } from 'react';
// import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import loginSchema from './components/userSchema';
import { createUser, getAllUsers } from '../../thunk/userThunk';
import { AppDispatch } from '../../store';

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            {...formik.getFieldProps('name')}
          />
          <input
            type="text"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          <input
            placeholder="Senha"
            type="password"
            {...formik.getFieldProps('password')}
          />
        </div>
        <button
          type="submit"
          disabled={able}
        >
          REGISTRAR
        </button>
      </div>
      {
        err && <span>Email ou senha inválidos</span>
      }
    </form>
  );
}

export default UserInput;
