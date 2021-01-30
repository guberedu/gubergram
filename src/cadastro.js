import React from 'react';

export default function Cadastro() {
    return (
        <div className="ContainerCadastro">
            <div className="Cadastro"> 
                <h1>Gubergram</h1>
                <span>Cadastre-se para ver fotos e vídeos dos seus amigos.</span>
                <form>
                    <input type="text" placeholder="Número do celular ou email"/> 
                    <input type="text" placeholder="Nome completo"/> 
                    <input type="text" placeholder="Nome de usuário"/> 
                    <input type="password" placeholder="Senha"/> 
                    <button type="submit">Cadastre-se</button>
                </form>
            </div>
        </div>
    )
}