
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    // alert("Thank you for this click");
}

function redirecionar() {
    window.open("https://www.google.com/"); //abre em outra aba
    window.location.href = "https://github.com/ThiVieiraDev"; //abre na mesma aba
}

function trocar(elemento) {
    // document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    // alert("teste");
}

function voltar(elemento) {
    // document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/* Aprendendo funções em JS */
// function soma(n1, n2){
//     return n1 + n2;
// }
// console.log("10 + 2 é: " + soma(10,2));


/* Date */
// var d = new Date();
// alert(d.getDate() + " " + d.getMonth() + " " + d.getFullYear());


/* LAÇO COM FOR */
// var count;
// for(count = 0; count <= 5; count++){
//     console.log(count);
//     alert(count);
// }

/* LAÇO COM WHILE */
// var count = 0;
// while(count <= 5){
//     console.log(count);
//     alert(count);
//     count++;
// }


/* RECEBENDO DADOS E VERIFICANDO COM IF */
//  var idade = prompt("Qual a sua idade ?");
//  if (idade >= 18) alert("Pode acessar a página");
//  else alert("Não pode acessar a página");


/* LISTA E DICIONARIO */
//  var lista = ["maça", "pêra", "laranja"];
//  console.log(lista);
//  alert(lista[2]);

// var nome = "Thiago Vieira";
// var idade = 22;
// alert("Meu nome é " + nome + " e tenho " + idade + " anos");

// console.log(nome + " " + idade);