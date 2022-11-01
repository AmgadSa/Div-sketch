const container = document.querySelector('.container');
const rangeInput = document.querySelector('#rangeid');
const label = document.querySelector('#rangeLabel');
rangeInput.value = 16;

function createGrid(){
    divCount = rangeInput.value;
    container.textContent = '';
    let divSize = 100/divCount + '%';
    let divX;
for(let i = 0; i<(divCount*divCount); i++){
    divX = document.createElement('div');
    divX.setAttribute('id', i+1);
    divX.addEventListener('mouseenter',colorTarget);
    divX.style['width'] = divSize;
    divX.style['height'] = divSize;
    container.appendChild(divX);
    }}


function colorTarget(event){
    let color = event.target.style['background-color'] || 'ff';
    let rgb = parseInt(color.slice(4,8)).toString(16); //browser switching color to rgb throughs NaN
    let step = parseInt(color[1],16) || parseInt(rgb[0],16);
    console.log(color,step)
    step = (step<=3)? '000000':
            (step-3)*1118481;
    color = '#'.concat(step.toString(16));
    event.target.style['background-color'] = color;
    console.log(event.target.style['background-color'])
}

createGrid()