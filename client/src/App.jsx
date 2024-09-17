import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./routes/HomePage/homepage";
import Listpage from "./routes/listpage/listpage";
import SPA from "./routes/SPA/SPA";
import Profile from "./routes/profilepage/Profile";
import SignUp from "./routes/Signup/signup";
import Login from "./routes/loginpage/loginpage";
import Layout from "./routes/layout/layout";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute"
import UpdateProfile from "./routes/profilepage/updateProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="list" element={<Listpage />} />
          <Route path="spa" element={<SPA />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<Login />} />
          {/* Private Route */}
          <Route path="profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="profile/update" element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
