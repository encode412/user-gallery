import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../config/firebase";
import './LoginStyles.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/gallery')
        setError("");
        console.log(user);
      })
      .catch((e) => {
        const error = e.message;
        const errorMessage = error.substring(16);
        console.log(error);
        setError(errorMessage);
      });
  };

  return (
    <div className='login-container'>
      <div className='login-container_content'>
        <h2>Sign In</h2>
        <span>initiating splinter sequence...</span>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
          />
        </div>

        <div>
          <label htmlFor='email'>Password</label>
          <input
            id='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
        </div>
        <div>
          <button onClick={signIn}>Sign In</button>
        </div>
        {error}
      </div>
    </div>
  );
};

export default Login;
