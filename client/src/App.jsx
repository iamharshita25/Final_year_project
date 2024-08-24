

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Listpage from "./routes/listpage/listpage"
import Homepage from "./routes/HomePage/homepage"
import SPA from "./routes/SPA/SPA"
// import Profile from "./routes/profilepage/Profile";
// import Login from "./routes/loginpage/loginpage"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import SignUp from "./routes/Signup/signup";
import Login from "./routes/loginpage/loginpage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
        children:[
          {
            path:"/",
            element:<Homepage/>
          },
          {
            path:"/list",
            element:<Listpage/>
          },
          {
            path:"/spa",
            element:<SPA/>
          },
          {
            path: "/signup",
            element: <SignUp/>
          },
          {
            path: "/signin",
            element: <Login />
          },
        ]
        
  
    }
  ]);

  return (
    
    <RouterProvider router={router}/>
  );
}

export default App
