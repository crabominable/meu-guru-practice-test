import axios from 'axios';

class AxiosHTTP {
  Request = async (data: any) => {
    let axiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  };
}

export default (new AxiosHTTP());
