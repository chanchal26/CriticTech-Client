import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Courses from "../Components/Courses";
import ErrorPage from "../Components/ErrorPage";
import FAQ from "../Components/FAQ";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";

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
                path: '/faq',
                element: <FAQ />
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