// utils/tokenUtils.js
export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000); // current time in seconds
    return payload.exp < now;
  } catch (e) {
    return true; // token is malformed or missing
  }
};

