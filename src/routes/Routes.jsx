import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import Home from "../pages/Home/Home"
import ErrorPage from "../pages/ErrorPage"
import MyQueries from "../pages/MyQueries/MyQueries"
import AddQueries from "../pages/MyQueries/AddQueries"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
            {
                path: "/my_queries",
                element: <MyQueries />
            },
            {
                path: "/add_queries",
                element: <AddQueries />
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