
function criptografarTexto() {
    const texto = document.getElementById('text').value;
    const chave = document.getElementById('key').value;
    const verificaPass = "65%tyB4uL71212";

    if (!texto || !chave) {
        document.getElementById('output').innerText = 'Insira os dados';
        return;
    }
    if (chave !== verificaPass) {
        document.getElementById('output').innerText = 'Chave incorreta';
        return;
    }

    const textoCriptografado = CryptoJS.AES.encrypt(texto, chave).toString();
    document.getElementById('output').innerText = `Texto criptografado: ${textoCriptografado}`;
    console.log(textoCriptografado)
}

function descriptografarTexto() {
    const textoCriptografado = document.getElementById('text').value;
    const chave = document.getElementById('key').value;
    const verificaPass = "65%tyB4uL71212";

    if (!textoCriptografado || !chave) {
        document.getElementById('output').innerText = 'Insira os dados';
        return;
    }
    if (chave !== verificaPass) {
        document.getElementById('output').innerText = 'Chave incorreta';
        return;
    }
    try {
        const bytes = CryptoJS.AES.decrypt(textoCriptografado, chave);
        const textoOriginal = bytes.toString(CryptoJS.enc.Utf8);

        if (!textoOriginal) {
            document.getElementById('output').innerText = 'Falha ao descriptografar.';
        } else {
            document.getElementById('output').innerText = `Texto descriptografado: ${textoOriginal}`;
            
        }
    } catch (error) {
        document.getElementById('output').innerText = 'Erro ao descriptografar. Verifique o formato do texto ou a chave.';
    }
}
