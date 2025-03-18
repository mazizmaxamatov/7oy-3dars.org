import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://nt-devconnector.onrender.com/api/auth', form);
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            setError('Login yoki parol xato!');
        }
    };

    return (
        <div className=" w-[800px] mx-auto flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Tizimga kirish</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Parol"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <button onClick={() => navigate("/")}  type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                        Kirish
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Ro‘yxatdan o‘tmaganmisiz? <a href="/register" className="text-blue-600">Ro‘yxatdan o‘tish</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;






































// import axios from "axios";
// import { useEffect, useState } from "react";

// export const Login = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const getUser = async () => {
//       try {
//         const response = await axios.get("https://nt-devconnector.onrender.com/api/auth", {
//           headers: { "x-auth-token": token },
//         });
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     getUser();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>{user.name}</h1>
//           <h2>{user.email}</h2>
//         </div>
//       ) : (
//         <p>User not found or not logged in.</p>
//       )}
//     </div>
//   );
// };




















// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // export const Login = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     async function POSTUsers() {
// //       const users = await axios.get(
// //         `https://nt-devconnector.onrender.com/api/`,
// //         {
// //           headers: {
// //             "x-auth-token": token,
// //           },
// //         }
// //       );
// //       setUsers(users.data);
// //     }
// //     POSTUsers();
// //   }, []);

// //   console.log(users);


  
// //   return <div>

// //   {users.map((users) => {
// //     return (
// //       <div className="">
// //         <h1>{users.name}</h1>
// //         <h2>{users.email}</h2>
// //         <h3>{users.password}</h3>

// //       </div>
   
     
// //     )
// //   })}
// // </div>

// // }






// // <></>
