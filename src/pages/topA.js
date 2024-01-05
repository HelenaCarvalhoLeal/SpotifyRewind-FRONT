import $ from "jquery" 
import { topM } from "./topM";
export function topA(top5Artistas, top5Musicas) {
    $(".Top5Artistas").on("click", function(e){
        $(".Top5Artistas").remove();
        $("br").remove();
        $(".cardi").remove();

        $(".music-info").append(`<button class='Top5Musicas'>Top 5 Músicas</button>`);
        $(".music-info").append("<br />");
        top5Artistas.forEach(element => {
            $(".music-info").append(`
                <div class="cardi">
                    <div class="music-details">
                        <h2>${element.nome}</h2>
                    </div>
                    <div class="music-image">
                        <img src=${element.imagem} alt="Capa da Música" />
                    </div>
                </div>`
            )
        });
        topM(top5Musicas, top5Artistas);
    });
}