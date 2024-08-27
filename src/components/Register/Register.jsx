import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password != confirmPassword) {
      setError("Password do not Match!!");
      return;
    } else if (password.length < 6) {
      setError("Password length should be 6 Character!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      //regex used
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    setError("");

    console.log(name, photo, email, password, confirmPassword);
    registerUser(email, password);
  };
  return (
    <div className="w-[40%] min-w[500px] mx-auto border-2 border-blue-500 p-6 rounded-xl">
      <h2 className="text-2xl text-center font-bold">Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <p className="py-2">Name</p>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <p className="py-2">Photo</p>
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            className="input input-bordered w-full "
          />
        </div>
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
        <div>
          <p className="py-2">Confirm Password</p>
          <input
            name="confirmPassword"
            type="text"
            placeholder="Confirm Password"
            className="input input-bordered w-full "
          />
        </div>
        {error && <small className="text-red-800 py-2">{error}</small>}
        <button type="submit" className="btn btn-primary w-full my-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
