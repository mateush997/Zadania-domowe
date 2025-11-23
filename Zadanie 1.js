//Zadanie 1
console.log("Zadanie 1 - wyświetl ostatni element tablicy");
const arrayWithSomeNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const lastElementsFromArray = arrayWithSomeNumbers[arrayWithSomeNumbers.length -1];
console.log("Ostatni element z tablciy to: ", lastElementsFromArray);
console.log("\n");

//Zadanie 2
console.log("Zadanie 2 - pogodynka");
function checkTemperature(temperature)
{
    if (temperature < 0)
    {
        console.log("Mróz! Ubierz się ciepło!");
    }
    else if (temperature >= 0 && temperature <= 15)
    {
        console.log("Chłodno... Przydałaby się kurtka");
    }
    else
    {
        console.log("Ciepło! Zostaw kurtkę w domu :)");
    }
}

let randomNaturalNumbers = Math.floor(Math.random() * (35)) + (-10);
checkTemperature(randomNaturalNumbers);
console.log("\n");

//Zadanie 3
console.log("Zadanie 3 - pętla i liczby nieparzyste do 20");
for (let i = 0; i <= 20; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
}
