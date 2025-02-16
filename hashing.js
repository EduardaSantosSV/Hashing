const readline = require('readline');

const morse = [
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
    "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
    "..-", "...-", ".--", "-..-", "-.--", "--.."
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma palavra (somente letras minúsculas): ', (word) => {
    if (!/^[a-z]+$/.test(word)) {
        console.log("Erro: Por favor, digite apenas letras minúsculas.");
        rl.close();
        return;
    }

    const morseTranslation = word.split('').map(char => {
        const index = char.charCodeAt(0) - 97;
        return (index >= 0 && index < 26) ? morse[index] : '?';
    }).join(' ');

    console.log(`Código Morse: ${morseTranslation}`);
    rl.close();
});