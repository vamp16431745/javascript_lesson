//event listener with parameter
//document.getElementById('username').addEventListener('keyup',function(event){console.log(event.target.value)})



document.getElementById('username').addEventListener('blur', function (event) {
    let feedbackElement = document.getElementById('feedback')
    let username_string = event.target.value
    if (username_string.length < 5) {
        feedbackElement.textContent = "使用者的名稱必需大於5個字元"
    } else {
        feedbackElement.textContent = ""
    }

}, false)