import React from 'react';

import {
  NewUser,
  UsersTable,
} from './components';

import { Logo } from './images/index';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <img
        alt="logo"
        className="app-image-content"
        src={Logo}
      />
      <div className="app-user-form-container">
        <p className="app-user-description">
          Bem vindo ao Meu Guru dashboard,
          onde você pode cadastrar usuários,
          visualiza-lo em uma tabela,
          assim como editar ou deletar o mesmo!
        </p>
        <NewUser />
      </div>
      <UsersTable />
    </div>
  );
}

export default App;
