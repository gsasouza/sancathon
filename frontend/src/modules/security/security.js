const ACCESS_TOKEN = 'sancathon-jwt-token';

export const login = (accessToken) => localStorage.setItem(ACCESS_TOKEN, accessToken);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const isLoggedIn = () => {
  const token = getAccessToken();
  return token !== 'null' && !!token;
};
