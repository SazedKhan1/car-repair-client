import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import HomeLayout from "../../pages/HomeLayout/HomeLayout";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/SignUp/Signup";
import Checkout from "../../pages/Checkout/Checkout";
import Orders from "../../pages/Orders/Orders";


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
            },

            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]

    }
]);

export default router;