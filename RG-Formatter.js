function formatRG(rg) {
    // Remove tudo que não for dígito
    const numerosRG = rg.replace(/\D/g, '');

    // Limita o número de caracteres
    const rgLimitado = numerosRG.slice(0, 9);

    // Adiciona as pontuações enquanto o usuário digita
    let rgFormatado = '';
    for (let i = 0; i < rgLimitado.length; i++) {
        rgFormatado += rgLimitado[i];
        if (i === 1 || i === 4) {
            rgFormatado += '.';
        } else if (i === 7) {
            rgFormatado += '-';
        }
    }

    return rgFormatado;
}

// Exemplo de uso:
const rg = "12345678901234567890"; // Um RG sem máscara e com mais de 9 caracteres
const rgFormatado = formatRG(rg);
console.log(rgFormatado); 
