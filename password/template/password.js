process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", () => {
    inputString = inputString.split("\n");
    main();
});

function readLine() {
    return inputString[currentLine++];
}
/**
 * @param {string[]} strings - An array of encoded strings.
 * @returns {string} - The deciphered password.
 */
function decipher(strings) {

}

function main() {
    const strings = [];
    const n = parseInt(readLine());
    for (let i = 0; i < n; i++) strings.push(readLine());
    console.log(decipher(strings));
}
