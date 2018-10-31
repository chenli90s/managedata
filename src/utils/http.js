import axios from 'axios';
// import userStore from '../stores/userStore';

const baseURL = 'http://127.0.0.1:8000/api/';

// const baseURL = `http://${host}/api/`;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => config);
axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    const data = response.data;
    if (response.status === 200) {
      return data;
    }
    return Promise.reject();
  }
  , error =>
  // Do something with response error
    Promise.reject(error)
);

const Http = {
  baseURL,
  header: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  request(method, api, data) {
    const headers = this.header;
    // headers.Authorization = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTQwODY0NDk4LCJ1c2VyX2lkIjoxLCJlbWFpbCI6IiJ9.xEL72duveQb9CSqVFs5tV6wYDjDvhX-mFLQpL6ej8kMeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDA4NjQ4MzIsImVtYWlsIjoiIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.IIITT-yiqTg9MMgSv4SSzYp9l0VyO-r7J5ToXuW0ub4'
    const reqBody = data;
    const req = {
      method,
      url: api,
      baseURL,
      headers,
      transformRequest: [fromdata => JSON.stringify(fromdata)],
    };
    if (method === 'get') {
      req.params = reqBody;
    } else {
      req.data = reqBody;
    }
    return axios(req).catch(e => ({}));
  },
  get(api, data) {
    return this.request('get', api, data);
  },
  post(api, data) {
    return this.request('post', api, data);
  },
  patch(api, data) {
    return this.request('patch', api, data);
  },
  put(api, data) {
    return this.request('put', api, data);
  },
  delete(api, data) {
    return this.request('delete', api, data);
  },
  options(api) {
    return this.request('options', api);
  },
};

export default Http;
