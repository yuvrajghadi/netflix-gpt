import { validateData } from "../utils/Validation";
import Header from "./Header";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleButtonClick = () => {
    const message = validateData(
      emailRef.current.value,
      passwordRef.current.value,
      isSignInForm ? "Valid Name" : nameRef.current.value
    );

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "https://media.licdn.com/dms/image/v2/D4D03AQHsc9_SKRF11g/profile-displayphoto-shrink_400_400/B4DZc_XKQ4GkAk-/0/1749114726729?e=1762387200&v=beta&t=lcF9BwkuEHArE6xNli217i0YvekgWnYGfwcLoPGzNPQ",
          })
            .then(() => {
             const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
              navigate("/browse");
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
    setErrMessage(message);
    console.log(message);
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <img
        className="w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
        alt="LoginImage"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header stays fixed at top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Sign-in form centered */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black/70 p-8 rounded-md w-[28rem] h-[35rem] z-20"
      >
        <div className="flex">
          <h1 className="text-4xl font-bold text-white m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
        </div>

        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 m-2 w-[24rem] bg-black/70 border border-gray-600 rounded-md text-white"
          />
        )}

        <input
          ref={emailRef}
          type="email"
          placeholder="Email or mobile number"
          className="p-4 m-2 w-[24rem] bg-black/70 border border-gray-600 rounded-md text-white"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-[24rem] bg-black/70 border border-gray-600 rounded-md text-white"
        />

        <p className="text-red-500 p-2 font-medium">{errMessage}</p>

        <button
          className="bg-red-600 p-2 m-2 rounded-md w-[24rem] text-white font"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-gray-400 m-2 text-lg font-semibold text-center">
          <h2>OR</h2>
        </div>

        <p className="text-white cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
