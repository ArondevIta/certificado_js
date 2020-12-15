export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  let isAuth = false;

  if (token) {
    isAuth = true;
  }
  return isAuth;
};
