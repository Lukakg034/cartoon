import { createContext, useState } from "react";
import registrationData from "../../src/registration.json";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "",
    userPassword: "",
    userEmail: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  const contextValue = {
    userData,
    setUserData,

    login: (enteredUsername, enteredEmail, enteredPassword) => {
      const matchingUser = registrationData.find(
        (user) =>
          user.name === enteredUsername &&
          user.password === enteredPassword &&
          user.email === enteredEmail
      );
      if (matchingUser) {
        setUserData({
          username: matchingUser.name,
          userEmail: matchingUser.email,
          userPassword: matchingUser.password,
        });
        console.log(matchingUser);
        setIsLoggedIn(true);
        // onLoginSuccess(matchingUser);
        // if (typeof onLoginSuccess === "function") {
        //   onLoginSuccess();
        // }
      } else {
        console.log("Invalid credentials. Try again.");
      }
    },
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
