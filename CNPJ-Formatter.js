function formatCNPJ(cnpj) {
    // Remover tudo que não for dígito
    const numerosCNPJ = cnpj.replace(/\D/g, '');

    // Limitar a quantidade de números a 14 caracteres
    const cnpjNumerosLimitados = numerosCNPJ.slice(0, 14);

    // Adicionar as pontuações em intervalos específicos
    let cnpjFormatado = '';
    for (let i = 0; i < cnpjNumerosLimitados.length; i++) {
        cnpjFormatado += cnpjNumerosLimitados[i];
        if (i === 1 || i === 4) {
            cnpjFormatado += '.';
        } else if (i === 7) {
            cnpjFormatado += '/';
        } else if (i === 11) {
            cnpjFormatado += '-';
        }
    }

    return cnpjFormatado;
}

// Exemplo de uso:
const cnpj = "4736722218234235"; // Um CNPJ sem máscara incompleto
const cnpjFormatado = formatCNPJ(cnpj);
console.log(cnpjFormatado);
