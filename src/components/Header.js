import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex w-screen justify-between items-center px-4 py-4 absolute z-50">
      <div>
        <img
          className="w-44  px-8 "
          src= {LOGO}
          alt="Logo"
        />
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <div>
            <img className="w-8 h-8 " src={user?.photoURL} alt="Avatar" />
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="text-white font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
