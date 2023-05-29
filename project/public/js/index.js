import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'






const firebaseConfig = {
    apiKey: "AIzaSyCGZje3uuD-fjgKXGK1gIkiAWJAU1a9x5g",
    authDomain: "project-javascript-6b53d.firebaseapp.com",
    projectId: "project-javascript-6b53d",
    storageBucket: "project-javascript-6b53d.appspot.com",
    messagingSenderId: "1042869709719",
    appId: "1:1042869709719:web:7f407b032a60861dcfb2d2"
  };


  const app = initializeApp(firebaseConfig);


let formElement = document.querySelector('#form')

let allOfDataArray = [];

//setup現在的日期
const setupCurrentDate = () => {

    let current = new Date()
    let year = current.getFullYear()
    let month = current.getMonth() + 1
    let date = current.getDate()

    let month_string = String(month).padStart(2, "0")
    let date_string = String(date).padStart(2, "0")
    let current_date_string = `${year}-${month_string}-${date_string}`

    let dateElement = document.querySelector('#warrantyDate')
    dateElement.value = current_date_string
    dateElement.min = current_date_string


}

setupCurrentDate()



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

const checkRadioValue = () => {
    let radioElements = document.querySelectorAll('.form-check-input')
    radioElements.forEach(element => {
        if (element.checked) {
            // console.log(element.value)
            allOfDataArray.push({ 'catagory': element.value })
        }
    })
}

const warrantyCheck = () => {
    let checkboxElement = document.querySelector('#warrantyCheck1')
    if (checkboxElement.checked) {
        allOfDataArray.push({ 'warranty': true })

    }
    else {
        allOfDataArray.push({ 'warranty': false })

    }
}

const getwarrantyDate = () => {
    let dateElement = document.querySelector('#warrantyDate')
    allOfDataArray.push({ 'warrantyDate': dateElement.value })

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

const setEmpty = () => {
    let inputNameElement = document.querySelector('#inputName')
    inputNameElement.value = ""
    let inputCodeElement = document.querySelector('#inputCode')
    inputCodeElement.value = ""
    let radioElements = document.querySelector('#inlineRadio1')
    radioElements.checked = true
    let checkboxElement = document.querySelector('#warrantyCheck1')
    checkboxElement.checked = false
    setupCurrentDate()



}

formElement.addEventListener('submit', (event) => {
    clearAllAlertAndData()
    event.preventDefault()
    validateName()
    validateCodeFormat()
    checkRadioValue()
    warrantyCheck()
    getwarrantyDate()
    console.log(allOfDataArray)
    setEmpty()
})