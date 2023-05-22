window.addEventListener('DOMContentLoaded', init)



function init(){
    let cells = document.querySelectorAll('.honeycomb-cell');

    console.log(cells)
    
    cells.forEach(element => {
        element.addEventListener("click", Renderoverview)
    });
}

function Renderoverview(e){
    e.preventDefault();
    let clicked = this.classList[1]
    window.location.href = `./overview.html?type=${clicked}`
}