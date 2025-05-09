import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home.jsx'
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup.jsx";
import UserProfile from "../Pages/UserProfile.jsx";
import Landing from "../Pages/Landing";

const MyRoutes = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<Landing/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>

                <Route path="/userprofile" element={<UserProfile />} />
            </Routes>

    )
}

export default MyRoutes;