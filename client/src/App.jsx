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
import Addnewhouse from "./routes/profilepage/addnewhouse.jsx";
import Pricing from "./routes/profilepage/pricing.jsx";
import About from "./routes/About/About.jsx";
import Agent from "./routes/Agents/Agent.jsx"

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
          <Route path="about" element={<About />} />
          <Route path="agent" element={<Agent />} />
          {/* Private Route */}
          <Route path="profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="profileupdate" element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
          />
          <Route path="addnewhouse" element={
            <PrivateRoute>
              <Addnewhouse />
            </PrivateRoute>
          }
          />
          <Route path="Pricing" element={
            <PrivateRoute>
              <Pricing />
            </PrivateRoute>
          }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
