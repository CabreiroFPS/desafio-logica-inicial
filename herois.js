// Classe = o molde de um herói
class Heroi {
    // O constructor roda sozinho quando criamos um herói com "new"
    constructor(nome, idade, tipo) {
        // this = "este herói aqui". Guardamos cada valor dentro do objeto
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    // Método = uma função que pertence ao herói
    atacar() {
        let ataque = ""

        // A descrição do ataque muda conforme o tipo
        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "um ataque desconhecido"
        }

        // Concatenamos o tipo (que está no objeto) com o ataque
        return `o ${this.tipo} atacou usando ${ataque}`
    }
}

// Criando heróis (objetos) a partir do molde
let heroi1 = new Heroi("Merlin", 300, "mago")
let heroi2 = new Heroi("Arthur", 25, "guerreiro")
let heroi3 = new Heroi("Shifu", 60, "monge")
let heroi4 = new Heroi("Hattori", 30, "ninja")

console.log(heroi1.atacar())
console.log(heroi2.atacar())
console.log(heroi3.atacar())
console.log(heroi4.atacar())
