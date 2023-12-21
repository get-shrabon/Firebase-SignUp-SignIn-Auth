import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="form__container">
      <form className="container formBG mx-auto">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="checkbox" />
            <label htmlFor="terms">Accept our terms and conditions</label>
          </div>
          <div>
            <Link to="/login" className="underline">Already Have an Account?</Link>
          </div>
        </div>
        <button className="btn btn-success w-full mt-4">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
