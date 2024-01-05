import React from 'react';
import $ from "jquery";
import axios from 'axios';
import '../css/style2.css';
import '../css/reset.min.css';
import '../css/default.css';
import logo from '../img/Logo512.png';
import { topA } from './topA';

export function User(dataUrl) {
    function home() {
        window.location.href = "/";
    }
    axios.get("http://localhost:3000/callback", {
        params: {
            code: dataUrl
        }
    }).then(response => {
        console.log(response)
        $(".music-info").append(`<button class='Top5Artistas'>Top 5 Artistas</button>`);
        $(".music-info").append("<br />");
        response.data.topMusicas.forEach(element => {
            $(".music-info").append(`
                <div class="cardi">
                    <div class="music-details">
                        <h2>${element.nomeMusica}</h2>
                        <p><em>${element.nomeAutor}</em></p>
                    </div>
                    <div class="music-image">
                        <img src=${element.imagem} alt="Capa da Música" />
                    </div>
                </div>`
            );
        });
        topA(response.data.topArtistas, response.data.topMusicas);
    });
    return (
        <div className="container" style={{ height: "inherit"}}>

            <header className="header">
                <img src={logo} alt="Logo" className="logo" onClick={home}/>
            </header>

            <main className="main">
                <div className="background-image">
                    <div className="music-info">
                    </div>
                </div>
            </main>

            <footer className="footer">
                <address>
                    &copy;
                    SpotifyRewind 2023 - <a href="https://github.com/LenorSantos/spotify-frontend.git" rel="noreferrer" target="_blank">Projeto front-end UNIT</a>
                </address>
            </footer>
        </div>
    );
}
