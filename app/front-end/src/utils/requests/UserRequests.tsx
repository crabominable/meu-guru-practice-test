import AxiosHTTP from '../axios';

const LOCAL = 'http://localhost:3001';

class UserRequests {
  createUser = async (payload: any) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/users`,
      method: 'POST',
      body: {
        ...payload,
      },
    });
    return response;
  };

  getAllUsers = async () => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/users`,
      method: 'GET',
    });
    return response;
  };

  updateUser = async ({ id, data }: any) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/users/${id}`,
      method: 'PUT',
      body: {
        ...data,
      },
    });
    return response;
  };

  deleteUser = async ({ id }: any) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/users/${id}`,
      method: 'DELETE',
    });
    return response;
  };
}

export default (new UserRequests());
