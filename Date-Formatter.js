function formatDate(data) {
    // Remove tudo que não for dígito
    const numerosData = data.replace(/\D/g, '');

    // Limita o número de caracteres
    const dataLimitada = numerosData.slice(0, 8);

    // Adiciona as pontuações enquanto o usuário digita
    let dataFormatada = '';
    for (let i = 0; i < dataLimitada.length; i++) {
        dataFormatada += dataLimitada[i];
        if (i === 1 || i === 3) {
            dataFormatada += '/';
        }
    }

    return dataFormatada;
}

// Exemplo de uso:
const data = "12345678"; // Uma data sem máscara e com mais de 8 caracteres
const dataFormatada = formatDate(data);
console.log(dataFormatada);
