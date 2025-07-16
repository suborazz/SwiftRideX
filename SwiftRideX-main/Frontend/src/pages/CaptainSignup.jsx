import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RideSwiftLogo from "../Images/SwiftRideX.png";
import { CaptainDataContext } from "../Context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  // States for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  // Error and loading states
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    // Validate vehicle capacity
    if (vehicleCapacity <= 0) {
      setError("Vehicle capacity must be greater than 0.");
      return;
    }

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      setIsLoading(true); // Set loading state
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;

        // Update context and localStorage
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);

        navigate("/captain-home");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false); // Reset loading state
    }

    // Clear form fields
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-50 mb-10" src={RideSwiftLogo} alt="Logo" />

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={SubmitHandler}>
          {/* Full Name */}
          <h3 className="text-xl mb-2">What's our Captain's name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <h3 className="text-xl mb-2">What's our Captain's email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Vehicle Information */}
          <h3 className="text-xl mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            className={`bg-[#111] text-white font-semibold w-full mb-3 rounded px-4 py-2 text-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Captain Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div>
        <p className="text-[10px] mt-6 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
