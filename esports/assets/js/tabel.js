window.addEventListener('DOMContentLoaded', init);


function init(){
   generateBracket(8)
}


function generateBracketItem(team1, team2, score1, score2){
// Create the li element with class attribute
const liElement = document.createElement('li');
liElement.className = 'tournament-bracket__item';

// Create the div element with class and tabindex attributes
const divElement = document.createElement('div');
divElement.className = 'tournament-bracket__match';
divElement.setAttribute('tabindex', '0');

// Create the table element with class attribute
const tableElement = document.createElement('table');
tableElement.className = 'tournament-bracket__table';

// Create the caption element with class attribute
const captionElement = document.createElement('caption');
captionElement.className = 'tournament-bracket__caption';

// Create the time element with datetime attribute
const timeElement = document.createElement('time');
timeElement.setAttribute('datetime', '1998-02-18');
timeElement.textContent = '18 February 1998';

// Append the time element to the caption element
captionElement.appendChild(timeElement);

// Create the thead element with class attribute
const theadElement = document.createElement('thead');
theadElement.className = 'sr-only';

// Create the tr element
const trElement = document.createElement('tr');

// Create the th elements and set their text content
const thElement1 = document.createElement('th');
thElement1.textContent = 'Country';
const thElement2 = document.createElement('th');
thElement2.textContent = 'Score';

// Append the th elements to the tr element
trElement.appendChild(thElement1);
trElement.appendChild(thElement2);

// Append the tr element to the thead element
theadElement.appendChild(trElement);

// Create the tbody element with class attribute
const tbodyElement = document.createElement('tbody');
tbodyElement.className = 'tournament-bracket__content';

// Create the first tr element with class attribute
const trElement1 = document.createElement('tr');
if(score1 > score2){
trElement1.className = 'tournament-bracket__team tournament-bracket__team--winner';
}else{
    trElement1.className = 'tournament-bracket__team tournament-bracket__team';
}

// Create the td element with class attribute
const tdElement1 = document.createElement('td');
tdElement1.className = 'tournament-bracket__country';

// Create the abbr element with class attribute and title attribute
const abbrElement1 = document.createElement('abbr');
abbrElement1.className = 'tournament-bracket__code';
abbrElement1.setAttribute('title', 'Canada');
abbrElement1.textContent = team1 ;

// Create the span element with class attribute and aria-label attribute
const spanElement1 = document.createElement('span');
spanElement1.className = 'tournament-bracket__flag flag-icon flag-icon-ca';
spanElement1.setAttribute('aria-label', 'Flag');

// Append the abbr and span elements to the td element
tdElement1.appendChild(abbrElement1);
tdElement1.appendChild(spanElement1);

// Create the td element with class attribute
const tdElement2 = document.createElement('td');
tdElement2.className = 'tournament-bracket__score';

// Create the span element with class attribute
const spanElement2 = document.createElement('span');
spanElement2.className = 'tournament-bracket__number';
spanElement2.textContent = score1;
spanElement2.setAttribute('contenteditable', 'true');
spanElement2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent line break on Enter key press
      
      var editedText = event.target.textContent;
      console.log('Edited text:', editedText);
      // Perform any additional actions with the edited text
    }
  });

// Append the span element to the td element
tdElement2.appendChild(spanElement2);

// Append the td elements to the tr element
trElement1.appendChild(tdElement1);
trElement1.appendChild(tdElement2);

// Create the second tr element with class attribute
const trElement2 = document.createElement('tr');
if(score2 > score1){
    trElement2.className = 'tournament-bracket__team tournament-bracket__team--winner';
    }else{
        trElement2.className = 'tournament-bracket__team tournament-bracket__team';
    }

// Create the td element with class attribute
const tdElement3 = document.createElement('td');
tdElement3.className = 'tournament-bracket__country';

// Create the abbr element with class attribute and title attribute
const abbrElement2 = document.createElement('abbr');
abbrElement2.className = 'tournament-bracket__code';
abbrElement2.setAttribute('title', 'Kazakhstan');
abbrElement2.textContent = team2;

// Create the span element with class attribute and aria-label attribute
const spanElement3 = document.createElement('span');
spanElement3.className = 'tournament-bracket__flag flag-icon flag-icon-kz';
spanElement3.setAttribute('aria-label', 'Flag');

// Append the abbr and span elements to the td element
tdElement3.appendChild(abbrElement2);
tdElement3.appendChild(spanElement3);

// Create the td element with class attribute
const tdElement4 = document.createElement('td');
tdElement4.className = 'tournament-bracket__score';

// Create the span element with class attribute
const spanElement4 = document.createElement('span');
spanElement4.className = 'tournament-bracket__number';
spanElement4.textContent = score2;

// Append the span element to the td element
tdElement4.appendChild(spanElement4);

// Append the td elements to the tr element
trElement2.appendChild(tdElement3);
trElement2.appendChild(tdElement4);

// Append the caption, thead, tbody, and tr elements to the table element
tableElement.appendChild(captionElement);
tableElement.appendChild(theadElement);
tableElement.appendChild(tbodyElement);
tbodyElement.appendChild(trElement1);
tbodyElement.appendChild(trElement2);

// Append the table element to the div element
divElement.appendChild(tableElement);

// Append the div element to the li element
liElement.appendChild(divElement);

// Access the container element where you want to add the generated HTML
return liElement

}


function generateRound(numberOfTeams){
    // Create the div element with class attributes
var divElement = document.createElement("div");
if(numberOfTeams == 1){
    divElement.className = "tournament-bracket__round tournament-bracket__round--bronze sixteen";
}
if(numberOfTeams == 0.5){
    divElement.className = "tournament-bracket__round tournament-bracket__round--gold sixteen";
}
else if(numberOfTeams == 4){
    divElement.className = "tournament-bracket__round tournament-bracket__round--semifinals sixteen";
}else{
divElement.className = "tournament-bracket__round tournament-bracket__round--quarterfinals sixteen";
}

if(numberOfTeams == 0.5){
    numberOfTeams = 1
}

// Create the h3 element with class attribute
var h3Element = document.createElement("h3");
h3Element.className = "tournament-bracket__round-title";
h3Element.textContent = "Round of 32";

// Create the ul element with class attribute
var ulElement = document.createElement("ul");
ulElement.className = "tournament-bracket__list thirty";

for(let i=0; i < numberOfTeams; i++){
    let li = generateBracketItem('CAN', 'IRE', Math.floor(Math.random() * (10 - 0 + 1)) + 0, Math.floor(Math.random() * (10 - 0 + 1)) +0);
    ulElement.appendChild(li);
}

// Append the h3 element to the div element
divElement.appendChild(h3Element);

// Append the ul element to the div element
divElement.appendChild(ulElement);

// Access the container element where you want to add the generated HTML
var container = document.querySelector(".tournament-bracket"); // Replace 'container' with the actual ID of the container element

// Append the div element to the container element
container.appendChild(divElement);

}

function generateBracket(amount){

    if(amount == 32){
        for(let i=0; i < 7; i++){
            generateRound(amount)
            amount = amount/2
        }
    }

    if(amount == 16){
        for(let i=0; i < 6; i++){
            generateRound(amount)
            amount = amount/2
        }
    }

    if(amount == 8){
        for(let i=0; i < 5; i++){
            generateRound(amount)
            amount = amount/2
        }
    }

}