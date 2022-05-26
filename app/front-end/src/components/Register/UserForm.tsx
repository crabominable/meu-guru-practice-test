import React, { useState } from 'react'
import { useFormik } from 'formik'

import loginSchema from './components/userSchema';

const UserInput = () => {
  const [able, setAble] = useState(true);
  const [err, setError] = useState(false);

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
      setAble(false);
    },

    onSubmit: (values) => {
      console.log(values);
      setError(true)
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
  )
}

export default UserInput;
