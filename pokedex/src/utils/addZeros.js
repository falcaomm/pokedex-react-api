export const addZeros = (num, lenght) => {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;

    while (counter < lenght) {

        numberWithZeroes = "0" + numberWithZeroes;

        counter++;

    }

    return numberWithZeroes;
}