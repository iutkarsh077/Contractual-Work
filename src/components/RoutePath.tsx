import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SignIn from "./Login";
import Dashboard from "./Dashboard";
import Layout from "../Layout";

const RouterPath = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<SignIn/>}/>
      <Route path='dashboard' element={<Dashboard/>} />
    </Route>
  )
)

export default RouterPath

