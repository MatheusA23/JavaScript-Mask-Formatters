function formatTelefoneFixo(telefone) {
    // Remove tudo que não for dígito
    const numerosTelefone = telefone.replace(/\D/g, '');

    // Limita o número de caracteres
    const telefoneLimitado = numerosTelefone.slice(0, 10);

    // Adiciona as pontuações enquanto o usuário digita
    let telefoneFormatado = '(';
    for (let i = 0; i < telefoneLimitado.length; i++) {
        telefoneFormatado += telefoneLimitado[i];
        if (i === 1) {
            telefoneFormatado += ') ';
        } else if (i === 5) {
            telefoneFormatado += '-';
        }
    }

    return telefoneFormatado;
}

// Exemplo de uso:
const telefone = "1234234567890"; // Um número de telefone sem máscara e com mais de 10 caracteres
const telefoneFormatado = formatTelefoneFixo(telefone);
console.log(telefoneFormatado);
