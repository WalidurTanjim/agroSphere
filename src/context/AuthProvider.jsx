/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import OTPInput from "../pages/Authentication/SignIn/ResetPassword/OTPInput";
import Reset from "../pages/Authentication/SignIn/ResetPassword/Reset";
import Recovered from "../pages/Authentication/SignIn/ResetPassword/Recovered";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // reset password state here
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === "login") return <SignIn />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <Reset />;

    return <Recovered />;
  }


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err) {
      console.error("Firebase signIn error:", err);
      throw err; // rethrow so that callers can handle it as well
    } finally {
      setLoading(false);
    }
  };
  // reset password
  // send password reset email
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("CurrentUser-->", currentUser?.email);
      if (currentUser?.email) {
        setUser(currentUser);
        await axiosPublic.post(
          `/jwt`,
          {
            email: currentUser?.email,
          },
          { withCredentials: true }
        );
      } else {
        setUser(currentUser);
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        });
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    resetPassword,
    page, setPage, otp, setOTP, setEmail, email,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
