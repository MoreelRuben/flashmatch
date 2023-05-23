window.addEventListener('DOMContentLoaded', init)




function init(){
    let tourneys = document.querySelectorAll(".match")
    tourneys.forEach(tourney => {
        tourney.addEventListener("click", giveTournament)
    })

    let competitive = document.querySelector('.competitive')

    let el = generateComptetiveMatch()

    competitive.appendChild(el)
}

function giveTournament(e){
    e.preventDefault();

    console.log(this.id)

}


function generateComptetiveMatch() {
    // Create the main div element with class attribute
    var divElement = document.createElement('div');
    divElement.className = 'match competitive';
  
    // Create the p element with class attribute
    var pElement = document.createElement('p');
    pElement.className = 'popularbet';
    pElement.textContent = 'Clash Tourney';
  
    // Create the ul element with class attribute
    var ulElement = document.createElement('ul');
    ulElement.className = 'popularparley';
  
    // Create the li elements and set their text content
    var liElement1 = document.createElement('li');
    liElement1.innerHTML = '<div class="bullet"><svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg></div>qualifiers 16 mei';
    var liElement2 = document.createElement('li');
    liElement2.innerHTML = '<div class="bullet"><svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg></div>second qualifiers 22 mei';
    var liElement3 = document.createElement('li');
    liElement3.innerHTML = '<div class="bullet"><svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg></div>finals 26 mei';
  
    // Append the li elements to the ul element
    ulElement.appendChild(liElement1);
    ulElement.appendChild(liElement2);
    ulElement.appendChild(liElement3);
  
    // Create the div element with class attribute
    var oddsDivElement = document.createElement('div');
    oddsDivElement.className = 'odds';
  
    // Create the p element
    var prizeMoneyElement = document.createElement('p');
    prizeMoneyElement.textContent = 'Prize money: 10k';
  
    // Create the button element
    var joinButtonElement = document.createElement('button');
    joinButtonElement.textContent = 'Join Now';
  
    // Append the p element and button element to the div element
   
    oddsDivElement.appendChild(prizeMoneyElement);
    oddsDivElement.appendChild(joinButtonElement);

    // Append all the elements to the main div element
    divElement.appendChild(pElement);
    divElement.appendChild(ulElement);
    divElement.appendChild(oddsDivElement);

    // Return the generated HTML
    return divElement;
    }
    