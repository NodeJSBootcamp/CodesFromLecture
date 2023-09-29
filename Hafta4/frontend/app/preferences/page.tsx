"use client"
import { useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/user/update', {
        email: email,
        phone: phone,
        gender: gender,
      }, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        alert("Preferences Updated Successfully");
        setEmail("")
        setPhone("")
        setGender("")
      } else {
        console.error('Profile update failed.');
      }
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-gray-600">
      <form 
      className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Update Profile</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600 font-medium mb-2">
            Phone:
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event)=>setPhone(event.target.value)}
            className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-600 font-medium mb-2">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(event)=>setGender(event.target.value)}
            className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Choose Gender</option>
            <option value="male">Man</option>
            <option value="female">Woman</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
