import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Body from './components/Body'
import Signup from "./components/Signup"
import Login from "./components/Login"
import Feed from './components/Feed'

const Routes = () => {

    const AllRoutes = createBrowserRouter([
        {
            path:"/",
            element:<Body/>,
            children: [
                {
                   path:"",
                   element:<Navigate to="feed" replace/>
                },
                {
                   path:"feed",
                   element:<Feed/>
                },
                {
                    path:"signup",
                    element:<Signup/>

                },
                {
                    path:"login",
                    element:<Login/>,
                },
            ]
        },
        
    ])

  return (
    <div>
        <RouterProvider router={AllRoutes}/>
    </div>
  )
}

export default Routes