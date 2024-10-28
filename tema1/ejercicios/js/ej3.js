
var mapa = new Map();
for (let index = 1; index <= 10; index++) {
    mapa.set(index, 0);
}
for (let index = 0; index < 10000; index++) {
    var num = Math.floor(Math.random() * 10) + 1;
    var cons = mapa.get(num);
    mapa.set(num, cons + 1);
}

console.log(mapa);
