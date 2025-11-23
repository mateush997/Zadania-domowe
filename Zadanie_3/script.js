//Manipulacja DOM przy uzyciu JS zadania domowe

console.log("Manipulacja DOMem, czyli remont DOMu");

//Zadanie 1 - dodaj element do HTML
function addElement() {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = '<h2>Sponsorem tego elementu jest pan Java Script</h2>';
    newDiv.style.backgroundColor = '#lightgreen';
    newDiv.style.padding = '10px';
    newDiv.style.margin = '10px 0';
    
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}

//Zadanie 2 - zmień kolor przyciskiem
function firstParagraphColourButtonChange() {
    const firstP = document.querySelector('p');
    firstP.style.color = 'green';
    firstP.style.fontWeight = 'bold';
}

//Zadanie 3 - event listener
function buttonEventListener() {
    const secondP = document.getElementById('paragraph-for-button');
    const button = document.getElementById('changeColorBtn');
    
    if (button && secondP) {
        const colors = ['blue', 'green', 'purple', 'orange', 'yellow'];
        
        button.addEventListener('click', function() {
            const randomColour = colors[Math.floor(Math.random() * colors.length)];
            
            // Change button color
            button.style.backgroundColor = randomColour;
            button.style.color = 'white';
            
            // Change second paragraph color
            secondP.style.color = randomColour;
            
            console.log("Button clicked! New colour: " + randomColour);
        });
        
    }
}

function init() {
    addElement();
    firstParagraphColourButtonChange();
    buttonEventListener();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}