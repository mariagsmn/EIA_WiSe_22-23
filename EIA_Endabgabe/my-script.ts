/*
    Datenstruktur definiert mit vier Werten
    frage beinhaltet ein string
    antowrt beinhaltet ein array von strings
    richtige Antwort beinhaltet ein string
    link beinhaltet ein string
*/
interface question {
    frage: string;
    antwort: string[];
    richtigeAntwort: string;
    link: string;
}
/*
    Deklariere ein Array von Object-Instanzen von question
    Diese beinhalten sieben HTML Fragen, mit ihren Antwortmöglichkeiten, die richtige Antwort und Links die mehr Informationen haben
 */
let html_question: question[] = [
    {
        "frage": "Kann man mit HTML Tabellen gestalten?",
        "antwort": ["Ja", "Nein", "Nur bei bestimmten Fällen"],
        "richtigeAntwort": "Ja",
        "link": "https://www.w3schools.com/html/html_tables.asp"
    },
    {
        "frage": "Für was steht HTML?",
        "antwort": ["Hypertext Markup Language", "Hyperbel Marking Language", "Hypertext Marker Language"],
        "richtigeAntwort": "Hypertext Markup Language",
        "link": "https://lerneprogrammieren.de/html-fragen-bewerbungsgespraech/"
    },
    {
        "frage": "Was ist der DOM?",
        "antwort": ["Das semantische Skellet einer Website", "DOM ist ein Mensch", "DOM gibt es nicht"],
        "richtigeAntwort": "Das semantische Skellet einer Website",
        "link": "https://www.w3schools.com/whatis/whatis_htmldom.asp"
    },
    {
        "frage": "Was macht das <div> tag?",
        "antwort": ["Definiert eine HTML - Überschrift", "Inhalte werden aufgeteilt und abgetrennt", "Inhalte werden zusammen geschoben"],
        "richtigeAntwort": "Inhalte werden aufgeteilt und abgetrennt",
        "link": "https://www.w3schools.com/tags/default.asp"
    },
    {
        "frage": "Was macht das <pic> Tag?",
        "antwort": ["Es bettet Bilder in HTML ein", "Dieses Tag gibt es nicht", "Es bettet Videos in HTML ein"],
        "richtigeAntwort": "Dieses Tag gibt es nicht",
        "link": "https://www.w3schools.com/html/html_images.asp"
    },
    {
        "frage": "Was macht das play() Tag?",
        "antwort": ["Es startet ein Audio oder Video Element", "Es startet Musik", "Es startet ein Spiel"],
        "richtigeAntwort": "Es startet ein Audio oder Video Element",
        "link": "https://www.w3schools.com/whatis/whatis_htmldom.asp"
    },
    {
        "frage": "Was ist ein Tag?",
        "antwort": ["Eine Marke", "Symbole, die Inhalte einschließen", "Symbole, die Längen markieren"],
        "richtigeAntwort": "Symbole, die Inhalte einschließen",
        "link": "https://lerneprogrammieren.de/html-fragen-bewerbungsgespraech/"
    }
];
/*
    Deklariere ein Array von Object-Instanzen von question
    Diese beinhalten sieben CSS Fragen, mit ihren Antwortmöglichkeiten, die richtige Antwort und Links die mehr Informationen haben
 */
let css_question: question[] = [
    {
        "frage": "Wie oft darf man eine ID in einem HTML-Dokument vergeben?",
        "antwort": ["Einmal", "Zwei mal", "Man darf keine IDs vergeben"],
        "richtigeAntwort": "Einmal",
        "link": "https://www.sololearn.com/discuss/1506400/id-selectors-can-only-be-used-once-per-page"
    },
    {
        "frage": "Wofür wird CSS benutzt?",
        "antwort": ["Um ein HTML Dokument zu stylen", "Um ein typescript Dokument zu stylen", "CSS gibt es nicht"],
        "richtigeAntwort": "Um ein HTML Dokument zu stylen",
        "link": "https://www.w3schools.com/css/default.asp"
    },
    {
        "frage": "Was bedeutet CSS?",
        "antwort": ["Crazy Style Sense", " Cascading Style Sheets", "Cool Style Sheet"],
        "richtigeAntwort": "Cascading Style Sheets",
        "link": "https://www.w3schools.com/css/css_intro.asp"
    },
    {
        "frage": "Wie viel Arten von CSS-Selektoren kann man unterscheiden?",
        "antwort": ["2", "7", "5"],
        "richtigeAntwort": "5",
        "link": "https://www.w3schools.com/css/css_selectors.asp"
    },
    {
        "frage": "Was bedeutet der Farbwert rgb (0,0,0)",
        "antwort": ["Es bedeutet, dass die Farbe schwarz ist", "Es bedeutet, dass die Farbe rot ist", "Es bedeutet, dass die Farbe weiß ist"],
        "richtigeAntwort": "Es bedeutet, dass die Farbe schwarz ist",
        "link": "https://www.w3schools.com/css/css_colors_rgb.asp"
    },
    {
        "frage": "Was ist der Unterschied zwischen CSS und HTML?",
        "antwort": ["HTML definiert, welche Inhalte es gibt. CSS bestimmt wie die Inhalte aussehen", "CSS definiert, welche Inhalte es gibt. HTML bestimmt wie die Inhalte aussehen", "HTML definiert, welche Texte es gibt. CSS bestimmt wie die Bilder aussehen"],
        "richtigeAntwort": "HTML definiert, welche Inhalte es gibt. CSS bestimmt wie die Inhalte aussehen",
        "link": "https://lerneprogrammieren.de/css-fragen-bewerbungsgespraech/"
    },
    {
        "frage": "Wie viele Versionen von CSS gibt es?",
        "antwort": ["3", "5", "4"],
        "richtigeAntwort": "4",
        "link": "https://lerneprogrammieren.de/css-fragen-bewerbungsgespraech/"
    }
];
/*
    Deklariere ein Array von Object-Instanzen von question
    Diese beinhalten sieben Typescript Fragen, mit ihren Antwortmöglichkeiten, die richtige Antwort und Links die mehr Informationen haben
 */
let typescript_question: question[] = [
    {
        "frage": "Typescript ist Javascript sehr ähnlich",
        "antwort": ["Ja", "Nein", "Typescript ist komplett gleich wie Javascript"],
        "richtigeAntwort": "Ja",
        "link": "https://www.w3schools.com/typescript/typescript_intro.php"
    },
    {
        "frage": "Wie viele einfache Typen gibt es in typescript?",
        "antwort": ["7", "3", "4"],
        "richtigeAntwort": "3",
        "link": "https://www.w3schools.com/typescript/typescript_simple_types.php"
    },
    {
        "frage": "Können „null“ und „undefined“ wie andere Typen, z. B. „string“, verwendet werden?",
        "antwort": ["Ja", "Den type „string“ gibt es nicht", "Nein"],
        "richtigeAntwort": "Ja",
        "link": "https://www.w3schools.com/typescript/typescript_null.php"
    },
    {
        "frage": "Was macht der Typ „boolean“?",
        "antwort": ["Man gibt an, ob ein Wert „true“ oder „false“ ist", "Man gibt an, dass man bowlen gehen will", "Man gibt an, dass ein Wert zu groß ist"],
        "richtigeAntwort": "Man gibt an, ob ein Wert „true“ oder „false“ ist",
        "link": "https://www.w3schools.com/typescript/typescript_simple_types.php"
    },
    {
        "frage": "Was gibt der typ „string“ an?",
        "antwort": ["Text Werte", "„String“ macht einen Strich", "Den Typ „String“ gibt es nicht"],
        "richtigeAntwort": "Text Werte",
        "link": "https://www.w3schools.com/typescript/typescript_simple_types.php"
    },
    {
        "frage": "Was sind die Vorteile von Typescript?",
        "antwort": ["Es hilft, den Code zu strukturieren", "Ermöglicht eine starke Typisierung", "Beide, der genannten Optionen"],
        "richtigeAntwort": "Beide, der genannten Optionen",
        "link": "https://www.communardo.de/blog/drei-gruende-warum-typescript-das-bessere-javascript-ist/"
    },
    {
        "frage": "Wer hat Typescript erfunden?",
        "antwort": ["Anders Hejlsberg", "Genau Heijlsberg", "Richtig Heijlsberg"],
        "richtigeAntwort": "Anders Hejlsberg",
        "link": "https://www.edureka.co/blog/interview-questions/typescript-interview-questions/amp/"
    }
];

//Konstanten die HTML Elemente beinhalten die im Skript aus- und eingeblendet werden sowie ihr Textinhalt geändert werden
const start: HTMLElement = document.querySelector(".Start");
const categories: HTMLElement = document.querySelector(".categories-container");
const quiz: HTMLElement = document.querySelector(".quiz");
const question: HTMLElement = document.querySelector(".question");
const answeroption = document.querySelectorAll(".answer");
const answercontainer = document.querySelector(".answers")
const response = document.querySelector(".response");
const Punktestand: HTMLElement = document.querySelector(".counter");
const resultContainer: HTMLElement = document.querySelector(".result_container");
const result: HTMLElement = document.querySelector(".result");

// Globale Variablen werden deklariert die für die Funktion gebraucht werden
let rightanswer: string = "";
let punkte: number = 0;
let usedNumquestion: number[] = [];
let currentcategory: question[];
let currentquestion: number;
let ismixed: boolean = false;

/*
    Funktion wenn Start-Button geklickt wird
    Hier wird Start ausgeblendet und die Kategorien eingeblendet
*/
function letsStart() {
    start.setAttribute('style', 'display:none');
    categories.setAttribute('style', 'display:block')
}

/*
    Funktion die aufgerufen wird wenn die Kategorie gemischt ausgewählt wird
    Generiert eine zufällige Nummer von 0 bis 2
    Jede von den drei Zahlen wird eine Kategorie zugewiesen (HTML, CSS, Typescript)
    Nachdem eine zufällige Kategorie bestimmt wurde, wird die Fucktion "categoryselected" aufgerufen
*/
function mixedcategory() {
    let ranNum = Math.floor(Math.random() * 3);
    let category: question[];
    switch (ranNum) {
        case 0: {
            category = html_question;
            currentcategory = html_question;
            break;
        }
        case 1: {
            category = css_question;
            currentcategory = css_question;
            break;
        }
        case 2: {
            category = typescript_question;
            currentcategory = typescript_question;
            break;
        }
    }
    categoryselected(category);
}

/*
    Funktion die aufgerufen wird wenn eine Kategorie/HTML, CSS, Typescript) ausgewählt wurde
    Kategorien werden ausgeblendet und das Quiz wird eingeblendet
    Eine Zähl-Schleife, die normalerweise nur einen Durchlauf hat
    In der Schleife wird eine zufällige Zahl zwischen 0 bis 6 generiert 
    In einer IF-Anweisung wird abgefragt ob diese zufällige Zahl im Array "usedNumquestion" vorhanden ist
    wenn nicht dann:
        die zufällige Zahl wird dem Array hinzugefügt
        die Frage wird angezeigt
        die richtige Antwort wird zwischengespeichert
        und die aktuelle Zahl wird gespeichert
        Schleife ist dann beendet
    wenn ja:
        wird die Zählvariable um eins reduziert (Schleife geht weiter)
        continue -> neue Schleifeniteration wird gestartet
*/
function categoryselected(category: question[]) {
    categories.setAttribute('style', 'display:none');
    quiz.setAttribute('style', 'display:block');
    let ranNum: number;
    for (let i = 0; i < 1; i++) {
        ranNum = Math.floor(Math.random() * 7)
        if (usedNumquestion.includes(ranNum) == false) {
            usedNumquestion.push(ranNum);
            question.innerText = category[ranNum].frage;
            rightanswer = category[ranNum].richtigeAntwort;
            currentquestion = ranNum;
        }
        else {
            i--;
            continue;
        }
    }
    generateAnswers(category[ranNum])
}

/*
    Funktion die aufgerufen wird, um Antworten einer Frage zu generieren
    Eine Zähl-Schleife, die normalerweise nur drei Durchläufe (Anzahl der Antwort-Container) hat
    In der Schleife wird eine zufällige Zahl zwischen 0 bis 2 generiert 
    In einer IF-Anweisung wird abgefragt ob diese zufällige Zahl im Array "usenNumanswer" vorhanden ist
    wenn nicht dann:
        die zufällige Zahl wird dem Array hinzugefügt
        die Antwort wird angezeigt
    wenn ja:
        wird die Zählvariable um eins reduziert
        continue -> neue Schleifeniteration wird gestartet
    Es geht so lange weiter bis alle drei Amtworten in einer zufälligen Reihenfolge angezeigt wird
*/
function generateAnswers(whichquestion: question) {
    let usedNumanswer: number[] = [];
    let ranNum: number;
    for (let i = 0; i < answeroption.length; i++) {
        ranNum = Math.floor(Math.random() * 3)
        if (usedNumanswer.includes(ranNum) == false) {
            usedNumanswer.push(ranNum);
            answeroption[i].innerHTML = whichquestion.antwort[ranNum];
        }
        else {
            i--;
            continue;
        }
    }
}

/*
    Funktion die aufgerufen wird wenn eine Antwort angeklickt wurde
    Antwortmöglichkeiten wird ausgeblendet und das Ergebnis wird eingeblendet
    Wenn der Inhalt des angeklickten Antwort der richtigen Antwort entspricht:
        punkte wird um 1 erhöht
        Neuer Punktestand wird angezeigt
        Es wird anzeigt das die Antwort richtig ist und ein Link wird angezeigt, die mehr Informationen beinhaltet
    Wenn nicht:
        Es wird anzeigt das die Antwort falsch ist und ein Link wird angezeigt, die mehr Informationen beinhaltet
*/
function answerclicked(x: number) {
    answercontainer.setAttribute('style', 'display:none');
    response.setAttribute('style', 'display:block');
    if (answeroption[x].innerHTML == rightanswer) {
        punkte++;
        Punktestand.innerHTML = "Punkte: " + String(punkte);
        document.querySelector("span").innerHTML = "Richtig!!!<br>Weitere Infos findest du <a href='" + currentcategory[currentquestion].link + "' target='_blank'>hier</a>";
    }
    else {
        document.querySelector("span").innerHTML = "Leider lagst du hier falsch<br>Weitere Infos du <a href='" + currentcategory[currentquestion].link + "' target='_blank'>hier</a>";
    }
}

/*
    Funktion die aufgerufen wenn alle sieben Fragen beantwortet wurden oder fünf Punkte erreicht wurden
    Das Endergebnis wird eingeblendet und das Quiz wird ausgeblendet
    wenn true:
        positiver Feedback und finaler Punktestand
    wenn false:
        negativer Feedbakc und finaler Punktestand
*/
function finalresult(y: boolean) {
    resultContainer.setAttribute('style', 'display: block');
    quiz.setAttribute('style', 'display: none');
    if (y == true) {
        result.innerHTML = "Super!<br>Du hast fünf Fragen richtig beantwortet<br>Punktestand: " + String(punkte);
    }
    else if (y == false) {
        result.innerHTML = "Leider wurden alle Fragen beantwortet<br>und es wurden keine fünf Punkte erreicht<br>Punktestand: " + String(punkte);
    }
}

/*
    Funktion die aufgerufen wenn man neu starten will
    Variablen werden zurückgesetzt
    Start wird eingeblendet und Endergebnis wird ausgeblendet
*/
function newRun() {
    punkte = 0;
    Punktestand.innerHTML = "Punkte: " + String(punkte);
    usedNumquestion = [];
    ismixed = false;
    resultContainer.setAttribute('style', 'display: none');
    start.setAttribute('style', 'display:block');
}

// Klickevents
document.querySelector(".StartButton").addEventListener('click', letsStart);
document.querySelector(".category_html").addEventListener('click', () => {
    currentcategory = html_question;
    categoryselected(html_question);
});
document.querySelector(".category_css").addEventListener('click', () => {
    currentcategory = css_question;
    categoryselected(css_question)
});
document.querySelector(".category_typescript").addEventListener('click', () => {
    currentcategory = typescript_question;
    categoryselected(typescript_question)
});
document.querySelector(".category_gemischt").addEventListener('click', () => {
    ismixed = true;
    mixedcategory();
});
for (let i = 0; i < answeroption.length; i++) {
    answeroption[i].addEventListener('click', () => {
        answerclicked(i)
    });
}

/*
    Klickevent nach dem klicken des Weiter-Button
    es wird nachgeschaut ob die Kategorie gemsicht geklickt wurde oder nicht
    Antort wird eingebelnedet und das Ergebnis wird ausgeblendet
    wenn sieben Fragen beantwortet wurde, wird geschaut ob hier die fünf Punkte erreicht wird oder nicht
    man kann auch die fünf Punkte vorher erreichen und das quiz wird beendet
*/
document.querySelector(".weiter").addEventListener('click', () => {
    if (ismixed) {
        mixedcategory();
    }
    else {
        categoryselected(currentcategory);
    }
    answercontainer.setAttribute('style', 'display:block');
    response.setAttribute('style', 'display:none');
    if (usedNumquestion.length >= 7) {
        if (punkte >= 5) {
            finalresult(true);
        }
        else {
            finalresult(false);
        }
    }
    if (punkte >= 5) {
        finalresult(true);
    }
});
document.querySelector(".restart").addEventListener('click', newRun);

/* Ich habe die letzten Wochen drei Kurse über typescript belegt
   diese haben mir beim Verstehen der Aufgabe geholfen, ich kann sie allerdings nicht
   verlinken, da ich für sie bezahlt habe
*/   