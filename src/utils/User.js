

const setToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', true);

  };
  
  const setUserLoggedIn = () => {
    localStorage.setItem('isLoggedIn', true);
  };
  
  const getToken = () => {
    return localStorage.getItem('token');
  };
  
  const isUserLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };
  
  export { setToken, setUserLoggedIn, getToken, isUserLoggedIn };
  