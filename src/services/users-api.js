import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";

export async function getUsers(page) {
  try {
    const resp = await axios.get(`users?page=${page}&count=6`);
    const result = await resp.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getPositions() {
  try {
    const resp = await axios.get(`positions`);
    const result = await resp.data.positions;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getToken() {
  try {
    const resp = await axios.get(`token`);
    axios.defaults.headers.common.Token = resp.data.token;
    return resp.data.token;
  } catch (error) {
    console.log(error);
  }
}

export async function signUp(data) {
  try {
    const resp = await axios.post(`users`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id) {
  try {
    const resp = await axios.get(`users/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
