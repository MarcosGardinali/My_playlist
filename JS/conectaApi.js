async function listaVideos(){
    const conexao= await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json(); //Convertendo os dados em formatos de bytes para um json!
    
    return conexaoConvertida;
}//Função que cria uma requisição GET para pegar dados da API


async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videoss", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },//No header está sendo especificado que o dado que será enviado para a API é um json
        body:JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })//O json.stringfy converte os dados que estão sendo enviados para string
    });
    if (!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo!!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}//Função que cria uma requisição POSt para enviar dados para a API


async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}//Função que realiza uma busca na API, com base no termo de busca, que está sendo passado para a URL através de template string

export const conectaApi ={
    listaVideos,
    criaVideo,
    buscaVideo
} //O export serve para exportar uma variável chamada conecta API, que recebe os dados da função lista vídeos