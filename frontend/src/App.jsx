import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage.jsx"
import RegisterForm from "./pages/RegisterForm.jsx"
import LoginForm from "./pages/LoginForm.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            borderRadius: '8px',
            padding: '12px 16px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }
        }}
      />
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
