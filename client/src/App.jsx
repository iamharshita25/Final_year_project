

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Listpage from "./routes/listpage/listpage"
import Homepage from "./routes/HomePage/homepage"
import SPA from "./routes/SPA/SPA"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import SignUp from "./routes/Signup/signup";
import SignIn from "./routes/SignIn/signin";



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
            path:"/signin",
            element:<SignIn/>
          },
          
        ]
        
  
    }
    // {
    //   path: "/list",
    //   element: <Listpage/>,
    // },
  ]);



  return (
    
    <RouterProvider router={router}/>
  );
}

export default App
