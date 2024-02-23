function formatCPF(cpf) {
    // Remove tudo que não for dígito
    const numerosCPF = cpf.replace(/\D/g, '');

    // Limita o número de caracteres
    const cpfLimitado = numerosCPF.slice(0, 11);

    // Adiciona as pontuações enquanto o usuário digita
    let cpfFormatado = '';
    for (let i = 0; i < cpfLimitado.length; i++) {
        cpfFormatado += cpfLimitado[i];
        if (i === 2 || i === 5) {
            cpfFormatado += '.';
        } else if (i === 8) {
            cpfFormatado += '-';
        }
    }

    return cpfFormatado;
}

// Exemplo de uso:
const cpf = "12345678912"; // Um CPF sem máscara e com mais de 11 caracteres
const cpfFormatado = formatCPF(cpf);
console.log(cpfFormatado);
