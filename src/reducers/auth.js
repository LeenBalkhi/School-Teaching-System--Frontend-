  import { createSlice } from '@reduxjs/toolkit';
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialAuthState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

    const authSlice = createSlice({
        name: 'authentication',
        initialState: initialAuthState,
        reducers: {
          registerSuccess(state,action) {
            state.isLoggedIn = false;
            state.user= action.payload.user;
            console.log("data ", action.payload.user)

          },
          registerFail(state) {
            console.log(state)
            state.isLoggedIn = false;
          },
          loginSuccess(state,action) {
            console.log(action.payload.user);
            state.isLoggedIn = true;
            console.log(state.isLoggedIn);

            state.user= action.payload.user;

          },
          loginFail(state) {
            state.isLoggedIn = false;
          },
          logout(state) {
            state.isAuthenticated = false;
            state.user=null;
          },
        },
      });

  export const authActions = authSlice.actions;

export default authSlice.reducer;