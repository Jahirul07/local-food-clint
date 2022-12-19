import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import ReviewSubmit from "../../Pages/ReviewSubmit/ReviewSubmit";
import Signup from "../../Pages/Signup/Signup";
import UserReview from "../../Pages/UserReview/UserReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Signup></Signup>
            },
            {
                path: '/foods',
                element: <Services></Services>,
            },
            {
                path: '/foods/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/reviewsubmit',
                element: <ReviewSubmit></ReviewSubmit>,
            },
            {
                path: '/myreview',
                element: <UserReview></UserReview>
            }
        ]
    }
])
export default router;