//建立下拉式表單
let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')
let packageHintElement=document.getElementById('packageHint')
let termElement=document.getElementById('terms')
let termsHintElement=document.getElementById('termsHint')

//點擊Next會在主控台顯示submitting
formElement.addEventListener('submit', (event) => {
    console.log('submitting')
    event.preventDefault()
})

//下拉式表單選取新選項 主控台顯示changing
packageElement.addEventListener('change', (event) => {
    console.log('changing')
    
    
    
    // for (const option of packageElement.options)
    // {
        // 主控台顯示表單內所有選項
        // console.log(option.label)
        // 顯示表單內選項的值
        // console.log(option.value)
    // }    

    //建立選取到選項會出現提示警語
    let selectedIndex = packageElement.selectedIndex
    if(packageElement.options[selectedIndex].value=='monthly')
    {
        packageHintElement.innerText='如果選擇1年,可以省10塊美金'
    }
    else
    {
        packageHintElement.innerText='做的好'
    }
})

