console.log("1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.");

let vardas = "Čakas";
let pavardė = "Norisas";

if(vardas.length > pavardė.length) {
    console.log(pavardė);
}else {
    console.log(vardas);
}

console.log("2. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)");

vardas = "Styvenas";
pavardė = "Seagalas";

console.log(vardas.toUpperCase() + " " + pavardė.toLowerCase());

console.log("3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.");

vardas = "Dolfas";
pavardė = "Langrenas";

inicialai = console.log(vardas.charAt(0) + pavardė.charAt(0));

console.log("4. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.");

vardas = "Silvesteris";
pavardė = "Stalonė";
pasku3 = "";

pasku3 = vardas.substring(vardas.length -3) + pavardė.substring(pavardė.length -3);
console.log(pasku3);

console.log("5. Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.");

let filmas = "An American in Paris";

console.log(filmas.replaceAll("A", "*").replaceAll("a" , "*"));

console.log("6. Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.");

let pavadinimas = "An American in Paris";

console.log(pavadinimas.replaceAll(/[a,e,i,o,u]/gi, ""));

pavadinimas = "Breakfast at Tiffany's";

console.log(pavadinimas.replaceAll(/[a,e,i,o,u]/gi, ""));

pavadinimas = "2001: A Space Odyssey";

console.log(pavadinimas.replaceAll(/[a,e,i,o,u]/gi, ""));

pavadinimas = "It's a Wonderful Life";

console.log(pavadinimas.replaceAll(/[a,e,i,o,u]/gi, ""));

// Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.

let text = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"

console.log(text);

console.log(text.replaceAll(/[a-z : -]/gi,""));











