import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:2000/dashboard",{
          method:"GET",
          credentials:"include"
        });
        if (res.status !== 200) {
          console.log("not login")
          navigate("/login");
        }
        const mail = await res.json();
        console.log(mail.email);
        
        setEmail(mail.email)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchDashboard();
  }, [])

  return (
    <div>
      {email}'s Dashboard
    </div>
  );
};

export default Dashboard;