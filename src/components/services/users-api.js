import axios from "axios";

const baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/";
const options = "page=1&count=6";

export async function getUsers() {
  try {
    const resp = await axios.get(`${baseURL}users?${options}`);
    const result = await resp.data.users;
    return result;
  } catch (error) {
    console.log(error);
  }
}
