const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

const animacaoBotao = document.getElementById('.botao');
        botao.addEventListener('click', function(){
        botao.style.animation = 'animacaoBotao 1s';
 });

const botaoSelecionado = document.querySelector(".botao.selecionado");
botaoSelecionado.classList.remove("selecionado");

botao.classList.add("selecionado");

const personagemSelecionado = document.querySelector(".personagem.selecionado");
personagemSelecionado.classList.remove("selecionado");

personagens[indice].classList.add("selecionado");
    });
});

