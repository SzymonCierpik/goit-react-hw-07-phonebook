import axios from "axios";
const CONTACTS_URL = "contacts";
const instance = axios.create({
  baseURL: "https://64b5038ef3dbab5a95c6840d.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export const selectContacts = () => {
  return instance.get(`/${CONTACTS_URL}`);
};

export const addContact = (data) => {
  return instance.post(`/${CONTACTS_URL}`, data);
};

export const deleteContact = (id) => {
  return instance.delete(`/${CONTACTS_URL}/${id}`);
};
