const body = document.querySelector('body');

function createGrid(){
    let divX;
    for(let i = 0; i<16; i++){
        divX = document.createElement('div')
        divX.setAttribute('id', i);
        divX.className = 'grid-div';
        body.appendChild(divX);
    }
}