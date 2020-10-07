let btnPlus = document.querySelector('#plus')
let btnMinus = document.querySelector('#minus')
let input = document.querySelector('input')
let inputOne = document.querySelector('#inputOne')

btnPlus.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
    
    
})


btnMinus.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
    
    
})
