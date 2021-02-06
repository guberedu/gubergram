import React from 'react';
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className="ContainerLogin">
            <div className="Login"> 
                <h1>Gubergram</h1>
                <form>
                    <input className="CampoLogin" type="text" placeholder="Telefone, nome de usuário ou email"/> 
                    <div>
                       <input className="CampoLogin" type="password" placeholder="Senha"/>
                       <button className="BotaoSenha BotaoEntrar">Mostrar</button>
                    </div> 
                    <button className="BotaoEntrar" type="submit">Entrar</button>
                    <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
                </form>
            </div>
        </div>
    )
}
