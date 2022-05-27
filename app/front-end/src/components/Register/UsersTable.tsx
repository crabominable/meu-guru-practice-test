import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { getAllUsers } from '../../thunk/userThunk';

function UsersTable() {
  const dispatch: AppDispatch = useDispatch();
  const { users } = useSelector((state: any) => state.UserSlice);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        { !users ? 'loading' : users.map((item: any, index: any) => (
          <tr key={index}>
            <td>{ item.id }</td>
            <td>{ item.name }</td>
            <td>{ item.email }</td>
            <td>{ item.password }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
