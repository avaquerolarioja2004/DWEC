function Ordenador(marca, modelo, ram = 4, discoDuro = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.discoDuro = discoDuro;
    this.pulgadas = pulgadas;
}

Ordenador.prototype.toString = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, RAM: ${this.ram}GB, Disco Duro: ${this.discoDuro}GB, Pantalla: ${this.pulgadas} pulgadas`;
};

function Portatil(marca, modelo, ram = 4, discoDuro = 256, pulgadas = 12, autonomia = 4) {
    Ordenador.call(this, marca, modelo, ram, discoDuro, pulgadas);
    this.autonomia = autonomia; 
}

Portatil.prototype = Object.create(Ordenador.prototype);
Portatil.prototype.constructor = Portatil;

Portatil.prototype.toString = function() {
    return `${Ordenador.prototype.toString.call(this)}, Autonomía: ${this.autonomia} horas`;
};

const ordenador = new Ordenador("HP", "ProBook");
console.log(ordenador.toString()); 

const portatil = new Portatil("Dell", "XPS", 8, 512, 13, 10);
console.log(portatil.toString()); 
