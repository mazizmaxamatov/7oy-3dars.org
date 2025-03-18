import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/"/>} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;





















// import { Navigate, Route, Routes } from "react-router-dom";
// import NotFoundPage from "./components/NotFoundPage";
// import Login from "./pages/Login";

// const App = () => {




//   return (

//     <div>

//       <Routes>
//         <Route path="*" element={<Login/>}/>


//         <Route path="*" element={<NotFoundPage />} />
        
//       </Routes>


//     </div>
//   );
// };





// export default App;