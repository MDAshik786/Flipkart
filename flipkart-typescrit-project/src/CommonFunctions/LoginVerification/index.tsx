export const checkEmailVerification = () => {
    const email = JSON.parse(localStorage.getItem("loginData")!)?.email;
    return email ? true : false
  };

  export const displayEmail = () => {
    const email = JSON.parse(localStorage.getItem("loginData")!)?.email;
    return email;
  };
  