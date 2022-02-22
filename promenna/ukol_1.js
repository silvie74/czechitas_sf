let jmeno = prompt("Jak se jmenuješ?");
let vek = Number(prompt("Kolik je ti let?"));
let vaha = Number(prompt("kolik kg vážíš:"));
let vyska = Number(prompt("Kolik cm měříš?"));
let bmi = vaha / (vyska * vyska * 0.0001)

console.log ("Jmenuji se " + jmeno + " a je mi " + vek + " let, vážím " + vaha + " kg, měřím " + vyska * 0.01 + " m a moje BMI je " + bmi)

if (vek >= 18) {conzole.log("Výborně, jsi plnoletý!")} else {console.log("Bohužel, nejsi plnoletý")}
