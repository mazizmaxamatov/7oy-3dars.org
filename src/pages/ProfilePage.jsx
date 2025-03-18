import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get('https://nt-devconnector.onrender.com/api/auth', {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => setUser(res.data))
          .catch(() => navigate('/login'));
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
                {user ? (
                    <>
                        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <button onClick={logout} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                            Chiqish
                        </button>
                    </>
                ) : (
                    <p>Yuklanmoqda...</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;



























// import { Button } from "antd";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   let user = JSON.parse(localStorage.getItem("user"));
//   let navigate = useNavigate();

//   function Logout() {
//     localStorage.clear();
//     navigate("/");
//   }
//   return (
//     <div>
//       <div>
//         <h2>Name : {user.fullname}</h2>
//         <h2>email : {user.email}</h2>
//       </div>

//       <Button onClick={Logout} type="default">
//         Log out
//       </Button>
//     </div>
//   );
// };

// export default Profile;
