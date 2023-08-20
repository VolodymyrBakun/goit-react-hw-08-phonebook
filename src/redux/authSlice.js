import { createSlice } from '@reduxjs/toolkit';
import { registerUserThunk, loginUserThunk, refreshUserThunk, logoutUserThunk } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  authentificated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // __________ Log in ____________
      .addCase(loginUserThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // __________ Refresh ____________
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.userData = action.payload;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    // __________ Logout ____________
      .addCase(logoutUserThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    
  },

  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  //   filterContacts: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
});

// export const { addContact, deleteContact, filterContacts } =
//   contactsSlice.actions;

export const authReducer = authSlice.reducer;
