import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import SignIn from './components/SignIn'

export const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/login",
      element:<SignIn/>
    }
  ]);
