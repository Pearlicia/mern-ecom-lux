import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTYzMjQzY2UxMmMzNTk4ZWQxZDEyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjE0NDgxNSwiZXhwIjoxNjQ2NDA0MDE1fQ.DeqrfnX_bkYhFLnvdlJ7FU4nWTdg6NLJ0Prza5EDH1E"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
