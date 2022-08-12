import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Form">
                    <div className="firstHalf">
                        <div className="logo"></div>
                        <div className="signUpBtn">
                            <a href="#">S'inscrire</a>
                        </div>
                    </div>

                    <div className="secondHalf">
                        <div className="signInTitle">
                            <h2>Se connecter</h2>
                        </div>
                        <form className="login">
                            <div className="formBox">
                                <i class="fa-regular fa-envelope"></i>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Votre Mail"
                                />
                            </div>
                            <div className="formBox">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Mot de passe"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Connexion
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default App
