import React from 'react'
import NavBootSite from './Navbar/NavbarSite'
import Logo from '../assets/Logo.png'
import '../Styles/accueil.css'

const Accueil = () => {
    return (
        <>
            <NavBootSite />
            <div className="background">
                <div className="container-post">
                    <div className="photo-post">
                        <div className="profile-photo">
                            <img src={Logo} alt="My logo" />
                        </div>
                        <div className="profile-name">Franck Gauthier</div>
                    </div>
                    <div className="editor-post">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Écrivez votre post ici"
                        ></input>
                    </div>
                    <div className="button-post">
                        <button className="img-button">Image</button>
                        <button className="post-button">Post!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accueil
