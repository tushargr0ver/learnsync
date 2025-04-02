import { useState } from "react";
import GeneralNavbar from "../components/GeneralNavbar";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    oldPassword: "",
    newPassword: "",
    notifications: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <GeneralNavbar/>
      <h2 className="text-2xl font-semibold text-black/90 mb-6">Profile Settings</h2>

      {/* Profile Picture Upload */}
      <div className="flex items-center gap-4 mb-6">
        <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 rounded-full" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Change Picture</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-lg text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-lg text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-lg text-gray-600">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>

        {/* Change Password */}
        <div>
          <label className="text-lg text-gray-600">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>
        <div>
          <label className="text-lg text-gray-600">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>

        {/* Preferences */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          <label className="text-lg text-gray-600">Enable Notifications</label>
        </div>

        <div>
          <label className="text-lg text-gray-600">Theme</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mt-1"
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </div>

        {/* Save Button */}
        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg w-full mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
