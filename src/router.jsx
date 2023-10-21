
import { createBrowserRouter } from "react-router-dom"
// COmponents
import Login from './components/login'
import Register , {registerAction} from "./components/register"
import IdentityLayout from "./layouts/identity-layout"


const router = createBrowserRouter([
    {
        element : <IdentityLayout />,
        children: [
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>,
                action: registerAction,
                errorElement: <Register/>
            }
        ]
    }
])

export default router;