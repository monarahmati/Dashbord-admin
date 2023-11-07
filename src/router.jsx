import { createBrowserRouter } from "react-router-dom";
// COmponents
import Login, { loginAction } from "./components/login";
import Register, { registerAction } from "./components/register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/mainLayout/main-layout";
import Courses, { coursesLoader } from "./pages/courses";
import CourseCategories, { categoriesLoader } from "./pages/course-categories";
import CourseDetails, {
  courseDetailsLoader,
} from "./components/Courses/CourseDetails";
import { CategoryProvider } from "./context/CategoryContext";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <UnhandledException/>,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "course-categories",
        element: (
          <CategoryProvider>
            <CourseCategories />
          </CategoryProvider>
        ),

        loader: categoriesLoader,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: courseDetailsLoader,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

export default router;
