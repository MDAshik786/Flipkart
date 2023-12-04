export const checkEmailVerification = () => {
    const email = JSON.parse(localStorage.getItem("loginData")!).email;
    return email ? true : false
  };
  