import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
try{
    await conectaApi.criaVideo(titulo, descricao, url, imagem);//A conecta API foi importada para o arquivo js
                                                        // e dentro da função criarVideo ela está recendo os parâmetros solicitados pela função cria vídeo do arquivo conectaApi
    window.location.href = "../pages/envio-concluido.html";
}catch(e){
    console.log(e);
}
}

formulario.addEventListener("submit", evento => criarVideo(evento));