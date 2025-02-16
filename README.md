// Aluna: Eduarda dos Santos da Silva
// Universidade Federal de Pelotas
// Disciplina: Algoritmos e Estruturas de Dados II

__Desenvolva um programa que converte uma palavra digitada pelo usuário em código Morse. O programa deve utilizar uma técnica de hashing para armazenar os símbolos do código Morse em um vetor.__

__Requisitos:__

- O programa deve solicitar ao usuário que digite uma palavra.
- O programa deve converter cada caractere da palavra em código Morse.
- O programa deve utilizar um vetor para armazenar os símbolos do código Morse.
- O programa deve utilizar uma técnica de hashing para acessar os símbolos do código Morse no vetor.
- O programa deve imprimir o código Morse correspondente à palavra digitada pelo usuário.

__Observações:__

O código Morse deve ser impresso utilizando "ponto" e "traco" para representar os símbolos do código.
- O programa deve considerar apenas letras minúsculas (de 'a' a 'z').
char* morse[] = {".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---",
     ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-",
      ".....", "-....", "--...", "---..", "----.", "-·-·--", "·-··-·", "···-··-", "·-···", "-·--·", "-·--·-", "··--·-", "·-·-·", 
      "-···-", "-····-", "---···", "-·-·-·", "·--·-·", "·----·", "--··--", "·-·-·-", "-··-·", "··--··", " "};
