import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Login";
import Dashboard from "./Dashboard";
const RoutePath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default RoutePath
