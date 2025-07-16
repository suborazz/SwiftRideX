import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";
import axios from 'axios'; // Add this import

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/caption-login");
    }
  }, [token])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) .then((response) => {
    if (response.status === 200) {
      setCaptain(response.data.captain);
        setIsLoading(false);
    }
})
.catch((error) => {
    console.log(error)
    localStorage.removeItem("token")
    navigate("/caption-login")

})

  if (isLoading) {
    return (
    <div>Loading...</div>
    )
    }



  return <>{children}</>;
};

export default CaptainProtectWrapper;
