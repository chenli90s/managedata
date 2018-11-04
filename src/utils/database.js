import axios from 'axios';
import http from './http';
// window.$http = http
// http['header']['Cookie'] = 'sessionid=59v0nsdecujrzwm1vigzjfz9sxxd4tuc;'

const cates = {
  home: ['slider', 'ourService', 'choiceus', 'news', 'comment', 'clients'],
  about: ['ourGuidance', 'ourGood', 'ourTeam', 'ourPartners'],
  contact: ['contacts', 'maps'],
  service: ['ourGuidances', 'ourAdvantage', 'ourProduct', 'ourProductcate'],
  globals: ['globals'],
  product: ['ourProduct', 'ourProductcate'],
};

const checkToken = () => {
  // if (!localStorage.getItem('token')) {
  //   location = `http://${location.host}/#/login`;
  //   return;
  // }
  http.header.Authorization = `JWT ${localStorage.getItem('token')}`;
};

const datas = (res) => {
  // console.log(res)
  const url = `${http.baseURL + res}?format=json`;

  return {
    async get() {
      checkToken();
      return http.get(url);
    },
    async post(data) {
      checkToken();
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `JWT ${localStorage.getItem('token')}`,
      };
      const req = {
        url: `${http.baseURL + res}/`,
        method: 'post',
        headers,
        data,
      }
      return axios(req).catch(e => (console.log({})));
    },
    async patch(data) {
      checkToken();
      return http.patch(`${http.baseURL + res}/${data.id}/`, data);
    },
    async put(data) {
      checkToken();
      return http.put(url, data);
    },
    async delete(data) {
      checkToken();
      return http.delete(`${http.baseURL + res}/${data.id}/`, data);
    },
    async options() {
      checkToken();
      console.log(http.header)
      return http.options(url);
    },
  };
};

export default { cates, datas, http };
