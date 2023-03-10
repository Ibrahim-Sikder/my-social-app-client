import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import Media from "./Pages/Media/Media";
import Details from "./Pages/Media/Details";
import About from "./Pages/About/About";
import UpdatedMessage from "./Pages/Media/UpdatedMessage";
import PrivateRoute from "./Routes/PrivateRoute";
import Messages from "./Pages/Message/Messages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signin",
          element: <SignUp></SignUp>,
        },
        {
          path: "/media",
          element: <PrivateRoute><Media></Media></PrivateRoute>,
        },
        {
          path: "/about",
          element: (
            <PrivateRoute>
              <About></About>
            </PrivateRoute>
          ),
        },
        {
          path: "/message",
          element: <Messages></Messages>,
        },
        {
          path: "/updated",
          element: <UpdatedMessage></UpdatedMessage>,
        },
        {
          path: "/details/:id",
          element: (
            <PrivateRoute>
              <Details></Details>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://purple-media-server-mu.vercel.app/details/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
