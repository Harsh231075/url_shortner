import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage.jsx"
import RegisterForm from "./components/RegisterForm.jsx"
import LoginForm from "./components/LoginForm.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
