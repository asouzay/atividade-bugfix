// app.js

// BUG 1: A variável está errada (deveria ser 'usuarioLogado')
const usuarioLogado = "Alice"; 

// BUG 2: A condição está invertida (deveria ser >= 18)
const idade = 17;
if (idade >= 18) {
    console.log("Menor de idade, acesso negado.");
}

// BUG 3: Falta um ponto e vírgula e a função está errada (deveria ser console.log)
function exibirMensagem() {
    print("Bem-vindo" + user) 
}

exibirMensagem();