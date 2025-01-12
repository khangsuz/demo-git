import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
const PrivateRoute = ({ requiredRole = null, children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");
    console.log("Raw user string from localStorage:", userString);
    
    let user;
    try {
      user = JSON.parse(userString);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }  

    if (!token) {
      navigate("/login");
    } else if (requiredRole && user?.userType !== requiredRole) {
      console.log("User role doesn't match. Redirecting to home.");
      navigate("/");
    } else {
      console.log("User authorized");
      setIsAuthorized(true);
    }
  }, [navigate, requiredRole]);

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return children;
};

export default PrivateRoute;