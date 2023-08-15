import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import HomeLayout from "../../pages/HomeLayout/HomeLayout";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/SignUp/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]

    }
]);

export default router;