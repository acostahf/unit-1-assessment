console.log('works')



let inpBox = document.getElementById('inpId');
let countNum = document.getElementById('count');
let array=[];

document.querySelector('button#addButton').addEventListener('click', function(){
    sum += parseFloat(inpBox.value) ;

    render();
})


document.querySelector('button#minusButton').addEventListener('click', function(){
    sum -= parseFloat(inpBox.value) ;
    
    render();
})

function init() {
    sum = 0;
}
  
function render() {
    countNum.textContent = (sum >= 0 ? '+' : '') + sum;
    countNum.style.color = (sum <= 0 ? 'red' : 'black')
    
}


init();