import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
  };
  return (
    <div className="w-[40%] min-w[500px] mx-auto border-2 border-blue-500 p-6 rounded-xl">
      <h2 className="text-2xl text-center font-bold">LogIn</h2>
      <form onSubmit={handleLogin}>
        <div>
          <p className="py-2">Email</p>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p className="py-2">Password</p>
          <input
            name="password"
            type="text"
            placeholder="Password"
            className="input input-bordered w-full "
          />
        </div>

        <button type="submit" className="btn btn-primary w-full my-4">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
