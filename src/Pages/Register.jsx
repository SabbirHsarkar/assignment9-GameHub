import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerWithEmailPassword, setUser, user,handleGoogleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser(userCredential.user);
          })
          .catch((error) => {
            console.log(error);
          });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);

  const googleSignUp=()=>{
  handleGoogleSignIn()
  .then(result=>{
    const user=result.user
    setUser(user)
  })
  .catch(err=>console.log(err))
  
}

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="text"
                className="input input-bordered w-full"
                placeholder="Paste photo URL"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter password"
              />
            </div>

            <div className="flex justify-between text-sm">
              <Link className="link link-hover text-blue-600">
                Forgot password?
              </Link>
            </div>

            <button className="btn btn-neutral w-full mt-2">Register</button>
            <button onClick={googleSignUp} className="btn w-full "><FcGoogle /></button>

            <p className="text-center mt-3 text-sm">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 font-semibold ml-1 link link-hover"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
