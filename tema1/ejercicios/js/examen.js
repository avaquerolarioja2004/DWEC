/* 
Crear el objeto bombo con sus atributos y métodos.
- [1] inicializar: Rellena el bombo con 90 bolas (no están ordenadas)
- [0.5] extraerBola: Saca una bola del bombo y la pone en bolas extraidas.
- [0.25] mostrarBolas: Muestra en la web las bolas en el bombo.
- [0.25] mostrarBolasExtraidas: Muestra en la web las bolas extraidas.
- [0.25] cantidadBolasEnBombo: Devuelve la cantidad de bolas en el bombo.
- [0.25] cantidadBolasExtraidas: Devuelve la cantidad de bolas extraidas.
*/ 

// [0.25] Pedir al usuario que introduzca el número de bolas a extraer.
// Mostrar en pantalla la cantidad de bolas en el bombo.
// Mostrar en pantalla las bolas en el bombo.
// Mostrar en pantalla la cantidad de bolas extraídas.
// Mostrar en pantalla las bolas extraídas.

function Bombo() {
    this.bombo = [];
    this.bolasExtraidas = [];
}

Bombo.prototype.inicializar = function() {
    for (let i = 1; i <= 90; i++) {
        this.bombo.push(i);
    }
}

Bombo.prototype.extraerBola = function() {
    let bolaExtraida = this.bombo.splice(Math.floor(Math.random() * this.bombo.length), 1);
    this.bolasExtraidas.push(bolaExtraida[0]);
}

Bombo.prototype.mostrarBolas = function() {
    alert(this.bombo);
}

Bombo.prototype.mostrarBolasExtraidas = function() {
    alert(this.bolasExtraidas);
}

Bombo.prototype.cantidadBolasEnBombo = function() {
    return this.bombo.length;
}

Bombo.prototype.cantidadBolasExtraidas = function() {
    return this.bolasExtraidas.length;
}

Bombo.prototype.pedirBolas = function() {
    let bolas = parseInt(prompt('Introduce el número de bolas a extraer'));
    for (let i = 0; i < bolas; i++) {
        this.extraerBola();
    }
    this.mostrarBolas();
    this.mostrarBolasExtraidas();
}

let bombo = new Bombo();

bombo.inicializar();
bombo.pedirBolas();
bombo.mostrarBolas();
bombo.mostrarBolasExtraidas();
