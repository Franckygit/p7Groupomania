import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Form">
                    <div className="firstHalf">
                        <div className="logo">
                            <img
                                src="C:\Users\franc\OneDrive\Documents\OPC\P7\groupomania\src\images\icon-left-font.png"
                                alt="Logo"
                            ></img>
                        </div>
                        <div className="signUpBtn">
                            <a href="#">S'inscrire</a>
                        </div>
                    </div>

                    <div className="secondHalf">
                        <div className="signInTitle">
                            <h2>Connexion</h2>
                        </div>
                        <form className="login">
                            <div class="formBox">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="inputEmail"
                                    placeholder="Adresse e-Mail"
                                />
                            </div>
                            <div class="formBox">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputPassword"
                                    placeholder="Mot de passe"
                                />
                            </div>

                            <button type="submit" class="btn btn-primary">
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
