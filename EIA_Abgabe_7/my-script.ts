window.addEventListener('load', function () {

    const populationDE2000 = 82260000;
    const populationDE2022 = 84080000;
    const populationFR2000 = 60910000;
    const populationFR2022 = 67840000;
    const populationIT2000 = 56940000;
    const populationIT2022 = 58980000;
    const populationSW2000 = 8870000;
    const populationSW2022 = 10450000;
    const populationEU2000 = 377000000;
    const populationEU2022 = 446800000;

    const germany = "Deutschland"
    const france = "Frankreich"
    const italy = "Italien"
    const sweden = "Schweden"

    const populationChangeDE = (populationDE2022 / populationDE2000 - 1) * 100
    const populationChangeFR = (populationFR2022 / populationFR2000 - 1) * 100
    const populationChangeIT = (populationIT2022 / populationIT2000 - 1) * 100
    const populationChangeSW = (populationSW2022 / populationSW2000 - 1) * 100
    const populationChangeEU = (populationEU2022 / populationEU2000 - 1) * 100

    const populationChangeDE2 = (populationDE2022 - populationDE2000)
    const populationChangeFR2 = (populationFR2022 - populationFR2000)
    const populationChangeIT2 = (populationIT2022 - populationIT2000)
    const populationChangeSW2 = (populationSW2022 - populationSW2000)
    const populationChangeEU2 = (populationEU2022 - populationEU2000)

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

    const populationold = document.querySelector(".populationold")
    const populationnew = document.querySelector(".populationnew")
    const wachstumnumbers = document.querySelector(".wachstumnumbers")
    const wachstumspercent = document.querySelector(".wachstumpercent")

    const chart = document.querySelector(".chart") as HTMLDivElement
    document.querySelector(".germany").addEventListener("click", function () {
        calc(populationDE2000,populationDE2022,populationChangeDE2,populationChangeDE,populationChangeDE)
    })
    document.querySelector(".france").addEventListener("click", function () {
        calc(populationFR2000,populationFR2022,populationChangeFR2,populationChangeFR,populationChangeFR)
    })
    document.querySelector(".italy").addEventListener("click", function () {
        calc(populationIT2000,populationIT2022,populationChangeIT2,populationChangeIT,populationChangeIT)
    })
    document.querySelector(".sweden").addEventListener("click", function () {
        calc(populationSW2000,populationSW2022,populationChangeSW2,populationChangeSW,populationChangeSW)
    })
    document.querySelector(".stars").addEventListener("click", function (){
        calc(populationEU2000,populationEU2022,populationChangeEU2,populationChangeEU,populationChangeEU)
    })

    function calc(population2000,population2022,popchange1,popchange2,chartheight) { 
        populationold.innerHTML = (population2000/1000000).toFixed(2) + " Mio";
        populationnew.innerHTML = (population2022/1000000).toFixed(2)+ " Mio";      
        wachstumnumbers.innerHTML = (popchange1/1000000).toFixed(2)+ " Mio"; 
        wachstumspercent.innerHTML = (popchange2).toFixed(2) +" %";
        chart.style.height = chartheight + "%"
    }

























})