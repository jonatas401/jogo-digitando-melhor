//contagem de palavras
let frase = $('#texto').text();
let numPalavra = frase.split(" ").length ;
let numFrase  = $("#frase").text(numPalavra);


let campo = $("#area");
//caracteres digitados
campo.on("keypress", function(){
let frase = campo.val();
let nCaracteresDigitados = frase.length;
$("#caracteres-digitados").text(nCaracteresDigitados);

});
//palavras digitadas
campo.on('input', function(){
let frase = campo.val();
let nPalavrasDigitadas = frase.split(" ").length;
$("#palavras-digitadas").text(nPalavrasDigitadas);

})

// para limpar os campos e jogar novamente
function reload(){   
campo.attr("disabled" , false);
campo.val("");
$("#caracteres-digitados").text("0");
$("#palavras-digitadas").text("0");
$("#segundos").text("20");
$("#nome").val("");

mudaTexto();
}
// implementação do tempo
function  y() {
let x = setInterval(function(){
let segundos = $("#segundos").text();
let time = segundos - 1;
    $("#segundos").text(time);
    if(time <= 0 ){
        campo.attr('disabled', true)
        clearInterval(x)
        resultado();
       
    }

},1000)

}

//quando o tempo acabar a função ira colocar os daos na tabela

function resultado(){
    let nome = $("#nome").val();
    let frase = campo.val();
    let nPalavras = frase.split(" ").length;

   
    let tabela = document.getElementById("tabela");
    let linha = tabela.insertRow();
    linha.insertCell(0).innerHTML = nome;
    linha.insertCell(1).innerHTML = nPalavras;
    //criando botão dinamico
    let btn = document.createElement('button')
    linha.insertCell(2).append(btn)
    btn.innerHTML = "remover"
    btn.style.background = 'black'
    btn.style.padding = '5px'
    btn.style.width = '80px'
    btn.style.color = 'white'
   
    btn.onclick = function(){
        let i = linha.parentNode.parentNode.rowIndex;
        document.getElementById("tabela").deleteRow(i);
        
        
    }


}

// colocando textos aleatórios
function mudaTexto(){
let texto = Array();
texto[0] = "Praesent venenatis dui ut libero fermentum non sagittis tellus venenatis";
texto[1] = "Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing";
texto[2] = "In fermentum feugiat porta Praesent eget condimentum magna"
texto[3] = "consectetur ultrices augue neque faucibus mauris vel lobortis urna felis nec odio";
texto[4] = "Mauris commodo massa quis nisi ultrices ut gravida sem pellentesque";
texto[5] = "malesuada lectus risus eget malesuada ante iaculis vitae";
texto[6] = "condimentum Sed imperdiet tincidunt convallis";
texto[7] = "magna sodales quis tellus sed facilisis elementum erat";
texto[8] = "Pellentesque habitant morbi tristique senectus et netus et malesuada";

mudar = Math.floor(Math.random() * texto.length);
$("#texto").text(texto[mudar]);

let frase = $('#texto').text();
let numPalavra = frase.split(" ").length ;
let numFrase  = $("#frase").text(numPalavra);


}



