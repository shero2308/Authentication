import LoginForm from "../conponents/LoginForm"
import RegisterForm from "../conponents/RegisterForm"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
