import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";

const SignUpPage = () => {
  const auth = getAuth(app);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
          <p>Password</p>
          <input
            className="inputBox"
            type="password"
            name="password"
            placeholder="Type your password..."
            required
          />
        </div>
        <div>
          {success && <p className="text-green-700">{success}</p>}
          {error && <p className="text-red-700">{error}</p>}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="checkbox" />
            <label className="cursor-pointer" htmlFor="terms">Accept our terms and conditions</label>
          </div>
          <div>
            <Link to="/login" className="hover:no-underline underline">
              Already Have an Account?
            </Link>
          </div>
        </div>
        <button className="btn btn-success w-full mt-4">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
