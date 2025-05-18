import { authActions } from "../reducers/auth";

import AuthService from "../services/auth.service";

export const register =
  (name, address, email, password, phone1) => (dispatch) => {
    const phone = phone1 + "";
    console.log(phone);
    return AuthService.register(name, address, email, password, phone).then(
      (user) => {
        console.log(" koko user 200");

        console.log(user);
        dispatch(authActions.registerSuccess({ user: user }));

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);
        console.log(message);

        dispatch(authActions.registerFail());
        /*
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });*/

        return Promise.reject();
      }
    );
  };
export const register2 =
  (ageCategory, studentsGender, userId, token) => (dispatch) => {
    return AuthService.register2(
      ageCategory,
      studentsGender,
      userId,
      token
    ).then(
      (data) => {
        console.log(data);
        dispatch(authActions.registerSuccess({ user: data.user }));

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);
        console.log(message);

        dispatch(authActions.registerFail());
        /*
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });*/

        return Promise.reject();
      }
    );
  };

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      console.log(data);
      dispatch(authActions.loginSuccess({ user: data }));

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);

      dispatch(authActions.loginFail());
      throw new Error("not valid input");

      /*
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });*/

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch(authActions.logout());
};
