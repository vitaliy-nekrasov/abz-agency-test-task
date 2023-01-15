import axios from "axios";

const baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/";
let page = 1;
const options = `page=${page}&count=6`;

export async function getUsers() {
  try {
    const resp = await axios.get(`${baseURL}users?${options}`);
    const result = await resp.data.users;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function incrementPage() {
  return (page += 1);
}
