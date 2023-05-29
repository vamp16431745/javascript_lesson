
let formElement = document.querySelector('#form')

let allOfDataArray = [];

const validateName = () => {
    let inputNameElement = document.querySelector('#inputName')
    let nameAlertElement = document.querySelector('#nameAlert')
    let productName = inputNameElement.value
    if (productName.length == 0) {
        //console.log("沒有填資料")
        nameAlertElement.classList.remove("close")
        return
    }
    allOfDataArray.push({ 'productName': productName })
}

const validateCodeFormat = () => {
    let inputCodeElement = document.querySelector('#inputCode')
    let codeAlertElement = document.querySelector('#codeAlert')
    let inputCodeValue = inputCodeElement.value
    const codePatternReg = /\w\w\w-\w\w\w-\w\w\w/g  
    //正規則表達式Regular expression 能驗證xxx-xxx-xxx的語法
    console.log(inputCodeValue)
    if (inputCodeValue.length == 0 || codePatternReg.test(inputCodeValue) == false
    ) {
        //console.log("沒有填資料")
        codeAlertElement.classList.remove("close")
        return
    }
    allOfDataArray.push({ 'code': inputCodeValue })
}

const checkRadioValue =() =>{
    let radioElements =document.querySelectorAll('.form-check-input')
    radioElements.forEach(element =>{
        if(element.checked)
        {
            // console.log(element.value)
            allOfDataArray.push({'catagory':element.value})
        }
    })
}
 
const clearAllAlertAndData = () => {
    //清除產品警告
    let nameAlertElement = document.querySelector('#nameAlert')
    nameAlertElement.classList.add("close")

    //清除code警告
    let codeAlertElement = document.querySelector('#codeAlert')
    codeAlertElement.classList.add("close")

    //清除收集的資料
    allOfDataArray = []
}

formElement.addEventListener('submit', (event) => {
    clearAllAlertAndData()
    event.preventDefault()
    validateName()
    validateCodeFormat()
    checkRadioValue()
    console.log(allOfDataArray)
})