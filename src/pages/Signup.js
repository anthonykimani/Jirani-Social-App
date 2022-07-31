import "./signup.css";
import { signInWithGoogle } from "../components/GoogleLogin";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-text-container">
        <h1>Welcome</h1>
        <div className="sign-up-text">
          <h2>Jirani Social App</h2>
          <h2>Share memories and they will never fade away.</h2>
          <h2>Connect.Discover.Explore</h2>
        </div>
      </div>
      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h1>Sign up</h1>
          <h3>Sign in with Google</h3>
          <Link to={"/home"}>
            <button
              className="login-with-google-btn"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </button>
          </Link>
          <h3>or</h3>
          <h3>
            Or register for an account if you don't have one{" "}
            <a href="kim.">Sign in</a>
          </h3>
          <form>
            <input type="text" name="firstname" placeholder="Firstname" />
            <input type="text" name="lastname" placeholder="Lastname" />
            <input type="email" name="email" placeholder="Email" />
            <input type="number" name="number" placeholder="Phone Number" />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
            />
            <input
              type="password"
              name="password"
              placeholder="Repeat Password"
            />
            <div className="terms-container">
              <input type="checkbox" name="terms" class="checkbox" />
              <label htmlFor="terms">
                I agree to the <span>Terms of Service</span> and{" "}
                <span>Privacy Policy</span>
              </label>
            </div>
            <button className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
