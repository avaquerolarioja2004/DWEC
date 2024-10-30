function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var finish = true;
var alumnos = new Set();
var count = 0;

do {
    var entrada = prompt('Dame el nombre del alumno o escribe "fin" para acabar');
    if (entrada === 'fin') {
        finish = false;
    } else {
        if (alumnos.add(entrada)) {
            count++;
        } else {
            console.log('Error: Alumno ya añadido');
        }
    }
} while (finish);

var alumnosArray = Array.from(alumnos);
alumnosArray = shuffle(alumnosArray);

var grupos = [];
while (alumnosArray.length > 0) {
    var grupo = alumnosArray.splice(0, 3);
    grupos.push(grupo);
}

if (grupos.length > 0 && grupos[grupos.length - 1].length < 3) {
    let grupoExtra = grupos.pop(); // Saca el último grupo
    let grupoAleatorioIndex = Math.floor(Math.random() * grupos.length);
    grupos[grupoAleatorioIndex] = grupos[grupoAleatorioIndex].concat(grupoExtra); // Añade los alumnos al grupo aleatorio
}

console.log('Grupos formados:');
grupos.forEach((grupo, index) => {
    console.log(`Grupo ${index + 1}: ${grupo.join(', ')}`);
});



