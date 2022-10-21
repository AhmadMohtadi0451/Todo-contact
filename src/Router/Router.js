import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Form from "../Pages/Form";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addContact",
    element: <Form />,
  },
  {
    path: "/updateContact/:ContactId",
    element: <Form />,
  },
]);

export default Router;
