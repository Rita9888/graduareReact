import UserstoreService from "../service/userstore-service";

const userLoad = (user) => (dispatch) => {
  dispatch(userLoading(true));
  UserstoreService.postUserToLogin(user)
    .then((user) => dispatch(userFetchDataSuccess(user)))
    .catch((e) => dispatch(userLoadError(e.errors)));
};

const userRegistration = (user) => (dispatch) => {
  dispatch(userLoading(true));
  UserstoreService.postUserToRegister(user)
    .then((user) => dispatch(userFetchDataSuccess(user)))
    .catch((e) => dispatch(userLoadError(e.errors)));
};

const userFetchDataSuccess = (user) => {
  return {
    type: "USER_FETCH_DATA_SUCCESS",
    payload: user,
  };
};

const userLoading = () => {
  return {
    type: "USER_LOADING",
  };
};

const errorClearing = () => {
  return {
    type: "ERROR_CLEARING",
  };
};

const userLoadError = (error) => {
  return {
    type: "USER_LOAD_ERROR",
    payload: error,
  };
};

const userLoggedOut = () => {
  return {
    type: "USER_LOGGED_OUT",
  };
};

export { userLoad, userRegistration, errorClearing, userLoggedOut };
