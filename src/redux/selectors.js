export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectUserData = state => state.auth.userData;
export const selectToken = state => state.auth.token;
export const selectAuthentificated = state => state.auth.authentificated;
