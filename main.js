let frase = $('#texto').text();
let numPalavra = frase.split(" ").length ;
let numFrase  = $("#frase").text(numPalavra);


let campo = $("#area");
let nome = $("#nome").val();
//caracteres digitados
campo.on("keypress", function(){
let frase = campo.val();
let nCaracteresDigitados = frase.length;
$("#caracteres-digitados").text(nCaracteresDigitados);

});
//palavras digitadas
campo.on('input', function(){
let frase = campo.val();
let nPalavrasDigitadas = frase.split(" ").length - 1;
$("#palavras-digitadas").text(nPalavrasDigitadas);

})

function reload(){   
campo.attr("disabled" , false);
campo.val("");
$("#caracteres-digitados").text("0");
$("#palavras-digitadas").text("0");
$("#segundos").text("15");
$("#nome").val("");


mudaTexto();



}
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

//quando o tempo acabar a funcção ira colocar os daos na tabela
let nome1 = Array();

function resultado(){

//colocando na tabela a quantidade de palavras digitadas
let frase = campo.val();
let nPalavrasDigitadas = frase.split(" ").length -1;
$("#resultado").text(nPalavrasDigitadas);
// colocando na tabela o nome

nome = $("#nome").val();
nome1.push(nome);
console.log(nome1);
$("#jogador").text(nome);
}
function mudaTexto(){
let texto = Array();
texto[0] = "Praesent venenatis dui ut libero fermentum non sagittis tellus venenatis";
texto[1] = "Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing";
texto[2] = "In fermentum feugiat porta Praesent eget condimentum magna"
texto[3] = "consectetur ultrices augue neque faucibus mauris vel lobortis urna felis nec odio"
texto[4] = "Mauris commodo massa quis nisi ultrices ut gravida sem pellentesque"
texto[5] = "malesuada lectus risus eget malesuada ante iaculis vitae"
texto[6] = "condimentum Sed imperdiet tincidunt convallis"
texto[7] = "magna sodales quis tellus sed facilisis elementum erat"
texto[8] = "Pellentesque habitant morbi tristique senectus et netus et malesuada"

mudar = Math.floor(Math.random() * texto.length);
$("#texto").text(texto[mudar]);

let frase = $('#texto').text();
let numPalavra = frase.split(" ").length ;
let numFrase  = $("#frase").text(numPalavra);


}



/* function tabela(){

let tabela = $("#lista");
nome1.forEach(function(d){
  linha = tabela.insertRow();//criando coluna dinamica
  linha.insertCell(0).innerHTML = d // criando linha dinamica
})
}*/

