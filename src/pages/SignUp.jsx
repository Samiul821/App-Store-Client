import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUpperCase) {
      return toast.error(
        "Password must contain at least one uppercase letter."
      );
    }
    if (!hasLowerCase) {
      return toast.error(
        "Password must contain at least one lowercase letter."
      );
    }
    if (!hasNumber) {
      return toast.error("Password must contain at least one number.");
    }
    if (!isLengthValid) {
      return toast.error("Password must be at least 6 characters long.");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/");
          })
          .catch((error) => {
            alert(error);
            setUser;
          });
        toast.success("Sign Up Successfull.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Helmet>
        <title>Sign Up | App Store</title>
      </Helmet>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-6 text-3xl font-semibold text-center">
          Create a new account
        </h2>
        <form onSubmit={handleSignUp} className="space-y-8">
          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {/* Photo URL */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                required
                placeholder="Your Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign Up
          </button>
          <p className="text-sm text-center dark:text-gray-600">
            Allready Have An Account ?
            <Link
              to="/auth/login"
              href="#"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
