import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";

export default (type, params) => {
  //when user logs in
  if (type === AUTH_LOGIN) {
    const { username } = params;
    localStorage.setItem("username", username);

    //accept all username/password combination
    return Promise.resolve();
  }

  //when user logs out
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("username");

    //accept all username/password combination
    return Promise.resolve();
  }

  //when api returns error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  }

  //when user navigates to new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
