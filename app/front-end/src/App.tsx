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
        <NewUser />
      </div>
      <UsersTable />
    </div>
  );
}

export default App;
