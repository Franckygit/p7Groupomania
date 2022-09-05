import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/Auth/signup'
import LogIn from './Components/Auth/login'
import Error from './Components/Error'
import Home from './Components/Home'
import Accueil from './Components/Accueil'
import Profile from './Components/Profile'
import Guard from './Components/Auth/Guard'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<LogIn />} />
                <Route
                    path="accueil"
                    element={
                        <Guard>
                            <Accueil />
                        </Guard>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Guard>
                            <Profile />
                        </Guard>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
