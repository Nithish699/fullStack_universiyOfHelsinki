import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then(response => response.data);
};

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  };

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
  };
  

export default { getAll, create,  remove, update };