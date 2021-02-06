import React from 'react';

export default function Login() {
    return (
        <div className="ContainerLogin">
            <div className="Login"> 
                <h1>Gubergram</h1>
                <form>
                    <input type="text" placeholder="Telefone, nome de usuário ou email"/> 
                    <input type="password" placeholder="Senha"/> 
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}
