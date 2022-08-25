import React from 'react'
import '../Styles/home.css'

import NavBootHome from './Navbar/Navbar'

const Home = () => {
    return (
        <>
            <NavBootHome />
            <div className="background">
                <div className="message">
                    Bienvenue sur votre réseau personnel <p>Groupomania</p>
                    <br />
                    Commencez par vous inscrire ou bien connectez-vous !
                </div>
            </div>
        </>
    )
}

export default Home
