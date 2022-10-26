import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Courses from "../Components/Courses";
import ErrorPage from "../Components/ErrorPage";
import FAQ from "../Components/FAQ";
import Pricing from "../Components/Pricing";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import SingleCourse from "../Components/SingleCourse";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Courses />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/courses/:id',
                element: <SingleCourse />,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/price',
                element: <PrivateRoutes><Pricing /></PrivateRoutes>
            },
            {
                path: '/faq',
                element: <PrivateRoutes><FAQ /></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blog />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
        ]
    }
])

export default router;