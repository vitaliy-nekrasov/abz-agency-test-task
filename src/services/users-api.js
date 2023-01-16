import axios from "axios";

const baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export async function getUsers(page) {
  try {
    const resp = await axios.get(`${baseURL}users?page=${page}&count=6`);
    const result = await resp.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getPositions() {
  try {
    const resp = await axios.get(`${baseURL}positions`);
    const result = await resp.data.positions;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getToken() {
  try {
    const resp = await axios.get(`${baseURL}token`);
    const result = await resp.data.token;
    return result;
  } catch (error) {
    console.log(error);
  }
}

// axios.post(url[, data[, config]])

export async function signUp(data, token) {
  try {
    const resp = await axios({
      method: "post",
      url: "users",
      data,
      headers: { Token: token },
    });
    const result = await resp;
    return result;
  } catch (error) {
    console.log(error);
  }
}
