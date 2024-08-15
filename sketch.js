lavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria ();
}

function palavraAleatoria (){
  let palavras = ["ana linda", "ana perfeita", "ana maravilhosa"];
  return random (palavras);
}
function palavraParcial (minimo, maximo){
  
  let quantidade = map(mouseX, minimo, maximo,1,  palavra.length);
  let parcial = palavra.substring(0,quantidade);
  return parcial
}
function inicializaCores (){
  background('pink');
  fill ('purple')
  textSize(64);
  textAlign(CENTER, CENTER);
}
function draw() {
  inicializaCores ()

let maximo = width;
  let minimo = 0;
  let texto = palavraParcial (0, width)
  text(texto, 200,200);
  }

//função para o site scratch
function modoChuva (horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo Chuva!");
  } else 
  
  { console.log("Modo Chuva não é necessário neste momento.");
 
  }
}


