const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btneEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado;
}

//encriptar
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
//desencriptar
function btnDesincriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado;
}

function desencriptar(srtingDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    srtingDesencriptada = srtingDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (srtingDesencriptada.includes(matrizCodigo[i][1])) {
            srtingDesencriptada = srtingDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return srtingDesencriptada;
}
function copiar() {
    var mensagem = document.querySelector('.mensagem');
    mensagem.select(); //seleciona msg
    navigator.clipboard.writeText(mensagem.value); //copia o texto
    mensagem.value = "";
}
