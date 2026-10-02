let nome = "Gebeba"
let xp = 7500
let nivel = "" // Criamos essa variavel vazia. O proprio codico vai preencher eke depois!
// Se xp for menor que 1000
if (xp < 1000)   { 
    nivel = "Ferro"
}
// Senão, se xp for maior ou igual a 1001 E xp for menor ou igual a 2000
else if (xp>=1001 && xp<= 2000){
    nivel = "Bronze"
    // Senão, se xp for maior ou igual a 2001 E xp for menor ou igual a 5000
}
else if (xp>=2001 && xp<=5000){
    nivel = "Prata"
}
// Senão, se xp for maior ou igual a 5001 E xp for menor ou igual a 7000
else if (xp>=5001 && xp<=7000){
    nivel = "Ouro"
}
else if (xp>=7001 && xp<=8000){
    nivel = "Platina"
}
else if (xp>=8001 && xp<=9000){
    nivel = "Ascendente"
}
else if (xp>=9001 && xp<=10000){
    nivel = "Imortal"
}
else if (xp>10000){
    nivel = "Radiante"
}
console.log("O herói de nome" + nome + "Está no nível de"+ nivel)