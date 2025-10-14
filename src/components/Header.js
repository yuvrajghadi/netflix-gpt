import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className=" flex flex-col md:flex-row w-screen justify-between items-center px-4 py-4 absolute z-50">
      <div>
        <img className="w-48  px-8 " src={LOGO} alt="Logo" />
      </div>

      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch && (<select
            className="appearance-none bg-transparent text-white border text-center border-gray-400 rounded-md m-2 py-1 px-3 focus:outline-none cursor-pointer"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="text-black"
              >
                {lang.name}
              </option>
            ))}
          </select>
          )}
          <div>
            <img className="w-8 h-8 " src={user?.photoURL} alt="Avatar" />
          </div>
          <div>
            <button
              className="text-white font-semibold bg-blue-600 m-2 py-1 px-3 rounded"
              onClick={handleGptSearch}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
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
