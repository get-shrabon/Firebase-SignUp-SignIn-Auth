import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [passShow, setPassShow] = useState(null);

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setSuccess("Your Account Loggin Successful")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted, name);
    setError("");
    setSuccess("");
    {
      if (password.length < 6) {
        setError("Password should be at least 6 characters");
        return;
      } else if (!accepted) {
        setError("Please Accept Our Conditions");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setError("! Your Password Must be one uppercase");
        return;
      }
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("your account successfully created");
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="form__container">
      <form onSubmit={handleSignUp} className="container formBG mx-auto">
        <h1 className="text-center text-3xl font-bold mb-3">Sign Up </h1>
        <div className="mb-3">
          <p>Your Name</p>
          <input
            className="inputBox"
            type="text"
            name="name"
            placeholder="Type your name..."
            required
          />
        </div>
        <div className="mb-3">
          <p>E-mail</p>
          <input
            className="inputBox"
            type="email"
            name="email"
            placeholder="Type your email..."
            required
          />
        </div>
        <div className="mb-3">
          <p>Password:</p>
          <div className="flex items-center">
            <input
              className="inputBox"
              type={passShow ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <span
              onClick={() => setPassShow(!passShow)}
              className="ml-[-40px] cursor-pointer"
            >
              {!passShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        <div>
          {success && <p className="text-green-700">{success}</p>}
          {error && <p className="text-red-700">{error}</p>}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="checkbox" />
            <label className="cursor-pointer" htmlFor="terms">
              Accept our terms and conditions
            </label>
          </div>
          <div>
            <Link to="/login" className="hover:no-underline underline">
              Already Have an Account?
            </Link>
          </div>
        </div>
        <button className="btn btn-success w-full mt-4">Sign Up</button>
        <div className="flex justify-center mt-4 gap-5">
          <button
            onClick={handleGoogleAuth}
            className="text-3xl border p-3 rounded-full bg-black border-green-800 hover:text-green-950 duration-1000 text-green-800"
          >
            <FaGoogle></FaGoogle>
          </button>
          <button className="text-3xl border p-3 rounded-full bg-black border-green-800 hover:text-green-950 duration-1000 text-green-800">
            <FaGithub></FaGithub>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
