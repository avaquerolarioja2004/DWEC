function sumar(a,b, ...c) {
    var resultado=a+b;
    c.forEach((n) => {
        resultado += n;
    });
    return console.log(resultado);
}
sumar(1,2,3,4,5);