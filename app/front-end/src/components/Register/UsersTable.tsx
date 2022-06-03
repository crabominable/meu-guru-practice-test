import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { deleteUser, getAllUsers } from '../../thunk/userThunk';
import { setEditMode, setIdToBeEdited } from '../../redux/userSlice';

import {
  Editar,
  Excluir,
} from '../../images';

import './UsersTable.css';

function UsersTable() {
  const dispatch: AppDispatch = useDispatch();
  const { users, editMode } = useSelector((state: any) => state.UserSlice);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [users]);

  // eslint-disable-next-line consistent-return
  const handleClick = ({ target }: any, id: any) => {
    if (target.id === 'edit' || target.parentElement.id === 'edit') {
      if (editMode === false) {
        dispatch(setIdToBeEdited(id));
        return dispatch(setEditMode(true));
      }
      dispatch(setEditMode(false));
    }

    if (target.id === 'delete' || target.parentElement.id === 'delete') {
      dispatch(deleteUser(id));
      dispatch(getAllUsers());
    }
  };

  return (
    <table className="userstable-container">
      <thead className="userstable-structure-container">
        <tr>
          <th className="userstable-thead-content">Id</th>
          <th className="userstable-thead-content">Nome</th>
          <th className="userstable-thead-content">Email</th>
          <th className="userstable-thead-content">Senha</th>
          <th className="userstable-thead-content">Editar</th>
          <th className="userstable-thead-content">Excluir</th>
        </tr>
      </thead>
      <tbody className="userstable-structure-container">
        { !users ? 'loading' : users.map((item: any, index: any) => (
          <tr key={index}>
            <td className="userstable-row-content">{ item.id }</td>
            <td className="userstable-row-content">{ item.name }</td>
            <td className="userstable-row-content">{ item.email }</td>
            <td className="userstable-row-content">{ item.password }</td>
            <td className="userstable-row-content">
              <button
                className="userstable-row-edit-button"
                type="button"
                id="edit"
                onClick={(event: any) => handleClick(event, item.id)}
              >
                <img
                  className="userstable-icon"
                  src={Editar}
                  alt="editar"
                />
              </button>
            </td>
            <td className="userstable-row-content">
              <button
                className="userstable-row-delete-button"
                type="button"
                id="delete"
                onClick={(event: any) => handleClick(event, item.id)}
              >
                <img
                  className="userstable-icon"
                  src={Excluir}
                  alt="excluir"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
