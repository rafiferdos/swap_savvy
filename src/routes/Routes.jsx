import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import Login from "../pages/Authentication/Login"
import Home from "../pages/Home"
import Register from "../pages/Authentication/Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            // {
            //     path: "/login",
            //     element: <Login />
            // },
            // {
            //     path: "/login",
            //     element: <Login />
            // }
        ]
    }
])

export default router 