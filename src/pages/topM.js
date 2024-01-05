import $ from "jquery"
import { topA } from "./topA";
export function topM(top5Musicas, top5Artistas) {
    $(".Top5Musicas").on("click", function(e){
        $(".Top5Musicas").remove();
        $("br").remove();
        $(".cardi").remove();

        $(".music-info").append(`<button class='Top5Artistas'>Top 5 Artistas</button>`);
        $(".music-info").append("<br />");
        top5Musicas.forEach(element => {
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
            )
        });
        topA(top5Artistas, top5Musicas);
    });
}