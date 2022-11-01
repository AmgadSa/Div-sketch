const body = document.querySelector('body');

function createGrid(){
    body.textContent = ''
    let divX;
    for(let i = 0; i<(16*16); i++){
        divX = document.createElement('div');
        divX.setAttribute('id', i+1);
        divX.className = 'grid-div';
        divX.addEventListener('mouseenter',(event)=>{
            event.target.style['background-color'] = 'black';
        });
        body.appendChild(divX);
    }
}
createGrid()