const populationDE2000 = 82260000;
const populationDE2022 = 84080000;
const populationFR2000 = 60910000;
const populationFR2022 = 67840000;
const populationIT2000 = 56940000;
const populationIT2022 = 58980000;
const populationSW2000 = 887000;
const populationSW2022 = 10450000;

const germany = "Deutschland"
const france = "Frankreich"
const italy = "Italien"
const sweden = "Schweden"

const populationChangeDE = (populationDE2022 / populationDE2000 - 1) * 100
const populationChangeFR = (populationFR2022 / populationFR2000 - 1) * 100
const populationChangeIT = (populationIT2022 / populationIT2000 - 1) * 100
const populationChangeSW = (populationSW2022 / populationSW2000 - 1) * 100

const germanySentence1 = "In " + germany + " beträgt die Einwohnerzahl im Jahre 2000 " + populationDE2000 + " und im Jahre 2020 " + populationDE2022
const franceSentence1 = "In " + france + " beträgt die Einwohnerzahl im Jahre 2000 " + populationFR2000 + " und im Jahre 2020 " + populationFR2022
const italySentence1 = "In " + italy + " beträgt die Einwohnerzahl im Jahre 2000 " + populationIT2000 + " und im Jahre 2020 " + populationIT2022
const swedenSentence1 = "In " + sweden + " beträgt die Einwohnerzahl im Jahre 2000 " + populationSW2000 + " und im Jahre 2020 " + populationSW2022

const germanySentence2 = "In " + germany + " ist die Einwohnerzahl von 2000 auf 2020 um " + populationChangeDE + " % gestiegen."
const franceSentence2 = "In " + france + " ist die Einwohnerzahl von 2000 auf 2020 um " + populationChangeFR + " % gestiegen."
const italySentence2 = "In " + italy + " ist die Einwohnerzahl von 2000 auf 2020 um " + populationChangeIT + " % gestiegen."
const swedenSentence2 = "In " + sweden + " ist die Einwohnerzahl von 2000 auf 2020 um " + populationChangeSW + " % gestiegen."


console.log(germanySentence1);
console.log(germanySentence2);
console.log(franceSentence1);
console.log(franceSentence2);
console.log(italySentence1);
console.log(italySentence2);
console.log(swedenSentence1);
console.log(swedenSentence2);
