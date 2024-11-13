/*
Crea un tipo de objetos que sirvan para representar Cartas. Estos objetos tendrán dos
propiedades:
- palo. Que será un número de 1 a 4 (donde 1 significa Oros, 2 Espadas, 3 Bastos y 4 Copas)
- valor. Un número del 1 al 10. (8=sota, 9=caballo, 10=rey)
• Los objetos de este tipo se construyen indicando el palo y el valor. Si hay fallos en los datos,
se devuelve un objeto nulo en la creación.
• Las cartas tendrán estos métodos:
- darValor. Que recibe un número de palo y un valor para la carta para, con ellos, modificar
la carta. Ante datos incorrectos no cambia nada en la carta.
- toString. Método habitual (y estándar) para devolver en forma de texto entendible el valor
de la carta. Por ejemplo: As de Oros.
• Además, habrá otro tipo de objeto: Baraja. La idea es que represente una baraja de cartas
españolas. Tendrá los siguientes detalles:
- La baraja la forman 40 cartas. Para ello tendrá la propiedad cartas que será un array de 40
cartas.
- Al construir la Baraja se rellenan las cartas en el siguiente orden: por palos y cada palo
con las cartas del 1 al 10. No se podrá acceder directamente al array fuera de la función
constructora.
- El método barajar permite barajar las cartas. Es decir, desordenarlas de forma aleatoria.
- El método toString permite obtener la baraja en forma de texto para saber cómo están
ordenadas las cartas.
*/

function Cartas(palo, valor) {
    const carta = validarEntrada(palo, valor);
    if (carta) {
        this.palo = carta.palo;
        this.valor = carta.valor;
    } else {
        return null;
    }
}

Cartas.prototype.darValor = function(palo, valor) {
    const carta = validarEntrada(palo, valor);
    if (carta) {
        this.palo = carta.palo;
        this.valor = carta.valor;
    }
}

Cartas.prototype.toString = function() {
    const palos = ['Oros', 'Espadas', 'Bastos', 'Copas'];
    const valores = ['As', '2', '3', '4', '5', '6', '7', 'Sota', 'Caballo', 'Rey'];

    return `${valores[this.valor - 1]} de ${palos[this.palo - 1]}`;
}

function validarEntrada(palo, valor) {
    const palosValidos = [1, 2, 3, 4]; 
    const valoresValidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (!palosValidos.includes(palo)) {
        console.log('Palo incorrecto');
        return null;
    }

    if (!valoresValidos.includes(valor)) {
        console.log('Valor incorrecto');
        return null;
    }

    return { palo: palo, valor: valor };
}

function Baraja() {
    this.cartas = [];

    for (let palo = 1; palo <= 4; palo++) {
        for (let valor = 1; valor <= 10; valor++) {
            let carta = new Cartas(palo, valor);
            if (carta) {
                this.cartas.push(carta);
            }
        }
    }
}

Baraja.prototype.barajar = function() {
    for (let i = this.cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
}

Baraja.prototype.toString = function() {
    return this.cartas.map(carta => carta.toString()).join(', ');
}

let baraja = new Baraja();
console.log('Baraja inicial:', baraja.toString());

baraja.barajar();
console.log('Baraja barajada:', baraja.toString());
