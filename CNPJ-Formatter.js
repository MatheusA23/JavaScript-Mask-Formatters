function formatCNPJ(cnpj) {
    // Remover letras e manter apenas números
    const numerosCNPJ = cnpj.replace(/\D/g, '');

    // Limitar a quantidade de números a 14 caracteres
    const cnpjNumerosLimitados = numerosCNPJ.slice(0, 14);

    // Aplicar a máscara
    const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
    return cnpjNumerosLimitados.replace(cnpjRegex, '$1.$2.$3/$4-$5');
}

// Exemplo de uso:
const cnpj = "4736722342334245"; // Um CNPJ sem máscara com letras e mais de 14 dígitos
const cnpjFormatado = formatCNPJ(cnpj);
console.log(cnpjFormatado);
