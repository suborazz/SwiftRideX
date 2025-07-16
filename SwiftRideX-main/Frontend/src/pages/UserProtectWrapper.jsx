import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import axios from 'axios'; // Add this import

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token])

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) .then((response) => {
    if (response.status === 200) {
      setUser(response.data.user);
        setIsLoading(false);
    }
})
.catch((error) => {
    console.log(error)
    localStorage.removeItem("token")
    navigate("/login")

})

  if (isLoading) {
    return (
    <div>Loading...</div>
    )
    }



  return <>{children}</>;
};

export default UserProtectWrapper;
