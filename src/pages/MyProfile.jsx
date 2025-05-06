import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      setMessage("Profile updated successfully!");
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update profile.");
      toast.error("Failed to update profile.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Profile | App Store</title>
      </Helmet>
      <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

        <div className="flex justify-center mb-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="Profile" />
            </div>
          </div>
        </div>

        <p className="text-center text-base-content mb-6">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold">Photo URL:</span>
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </div>
        </form>

        {message && (
          <div className="alert alert-success mt-4 shadow-lg">
            <span>{message}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyProfile;
