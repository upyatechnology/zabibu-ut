// Auth.js

import { useState, useEffect, createContext, useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const login=(userData)=>{
    console.log("userData set in context")
    console.log(userData)
    console.log(userData.Role)
    setCurrentUser(userData)
    setUserRole(userData.Role)
  }

  useEffect(() => {
    if (currentUser) {
      console.log("got my user!!!")
      setUserRole(currentUser?.role);
    } else {
      console.log("don't have my user!!!")
      setUserRole(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userRole, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
