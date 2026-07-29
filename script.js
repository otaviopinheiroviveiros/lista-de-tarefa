const butaoaddTarefa = document.querySelector("#butao-adicionar-tarefa")
const butaoaVERTarefa = document.querySelector("#butao-verTarefa")
const voltar2janela = document.querySelector("#voltar-da-2janela-inicial")
const volta3janela = document.querySelector("#volta-da3janela-inicio")
butaoaVERTarefa.addEventListener("click",verTarefa)
butaoaddTarefa.addEventListener("click",addTarefa)
voltar2janela.addEventListener("click",voltarDa2JanelaP1)
volta3janela.addEventListener("click",voltaDa3janelaP1)

const conteinerInicio = document.querySelector(".conteiner")
const conteinerAddTarefa = document.querySelector(".conteiner-adicionar-tarefa")
const conteiner3janela = document.querySelector(".conteiner-3janela")

function addTarefa(){
    conteinerInicio.style.display = "none"
    conteinerAddTarefa.style.display = "flex"     
}


function verTarefa(){
    conteinerAddTarefa.style.display = "none"
    conteinerInicio.style.display = "none"
    conteiner3janela.style.display = "flex"
}

function voltarDa2JanelaP1(){
    conteinerAddTarefa.style.display = "none"
    conteinerInicio.style.display = "flex"
}

function voltaDa3janelaP1(){
    conteiner3janela.style.display = "none"
    conteinerInicio.style.display = "flex"
}