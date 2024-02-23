function formatCEP(cep) {
    // Remove tudo que não for dígito
    const numerosCEP = cep.replace(/\D/g, '');

    // Limita o número de caracteres
    const cepLimitado = numerosCEP.slice(0, 8);

    // Adiciona as pontuações enquanto o usuário digita
    let cepFormatado = '';
    for (let i = 0; i < cepLimitado.length; i++) {
        cepFormatado += cepLimitado[i];
        if (i === 4) {
            cepFormatado += '-';
        }
    }

    return cepFormatado;
}

// Exemplo de uso:
const cep = "12345678"; // Um CEP sem máscara e com mais de 8 caracteres
const cepFormatado = formatCEP(cep);
console.log(cepFormatado);
