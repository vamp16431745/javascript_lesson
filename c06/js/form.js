//建立下拉式表單
let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')

//點擊Next會在主控台顯示submitting
formElement.addEventListener('submit', (event) => {
    console.log('submitting')
    event.preventDefault()
})

//下拉式表單選取新選項 主控台顯示changing
packageElement.addEventListener('change', (event) => {
    console.log('changing')    
})