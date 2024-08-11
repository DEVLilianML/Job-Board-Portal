import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJobs from "../Pages/CreateJobs"
import Myjobs from "../Pages/Myjobs";
import SalaryPage from "../sidebar/Salary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>, // The main layout component
      children: [
        {path: "/", element: <Home/>},
        {path: "/post-job", element: <CreateJobs/>},
        {path: "/my-job", element: <Myjobs/> },
        {path: "/salary", element: <SalaryPage/> },
        {path: "/edit-job/:id", element: <UpdateJob/>,
          loader: ({params}) => fetch("http://localhost:5200/all-jobs/${params.id}")
        },
       {path: "/login", element: <Login/> },
       {path: "/job/:id", element: <JobDetails/> },

      ],
    },
  ]);

  export default router;