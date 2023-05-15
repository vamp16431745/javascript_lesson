//預設直接已點擊在對話框

window.addEventListener('load',(event)=>{
    console.log("網頁已經載入")
    let usernameElement=document.getElementById("username")
    usernameElement.focus()


})