import axios from "axios";
export const getUsers = () => {
  return axios.get("http://localhost:5001/users");
};

export const addUser = (data) => {
  return axios.post("http://localhost:5001/users", data);
};

export const deleteUser = (id) => {
  return axios.delete(`http://localhost:5001/users/${id}`);
};
