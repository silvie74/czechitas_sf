let jmenoUzivatele = prompt("Jak se jmenuješ?");
let vekUzivatele = Number(prompt("Kolik je ti let?"));


if (vekUzivatele < 18) {console.log("Vaše jméno je " + jmenoUzivatele + ", je Vám " + vekUzivatele + " let a tak musíte počkat ještě " + (18 - vekUzivatele) + "let, než budete moci řídit auto.")} else {console.log("Vaše jméno je " + jmenoUzivatele + ", je Vám " + vekUzivatele + " let a tak máte právo řídit auto.")}
