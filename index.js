class hero{
    constructor(name,age,type, specialAttack){
        this.name = name
        this.age = age
        this.type = type
        this.specialAttack = specialAttack
    }

    attack(){
        console.log(`O ${this.type} atacou usando ${this.specialAttack}!`)
    }
}

let mago = new hero("Patolino",638,"mago","magia")
let guerreiro = new hero("Leonidas",30, "guerreiro","espada")
let monge = new hero("Aang", 112, "monge", "artes marciais")
let ninja = new hero("Shikamaru", 16, "ninja", "shuriken")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()
