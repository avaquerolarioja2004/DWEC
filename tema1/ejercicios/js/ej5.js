function cifradoCesar(texto, clave) {
    let textoCifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let unicode = texto.charCodeAt(i);
        unicode += clave;
        textoCifrado = textoCifrado + String.fromCharCode(unicode);
    }
    document.write(textoCifrado);
}