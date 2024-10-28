function factoresPrimosRecursivos(numero, divisor = 2, factores = []) {
    if (numero == 1) {
        return factores;
    }
    
    if (numero % divisor === 0) {
        factores.push(divisor);
        return factoresPrimosRecursivos(numero / divisor, divisor, factores);
    }
    
    return factoresPrimosRecursivos(numero, divisor + 1, factores);
}

const numero = 60;
const factores = factoresPrimosRecursivos(numero);
console.log(`Los factores primos de ${numero} son: ${factores.join(', ')}`);
