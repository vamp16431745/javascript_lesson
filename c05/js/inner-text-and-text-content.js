//繼承關係
//使用.json檔指定修改name和url 增加中斷點已執行偵錯

let ElementOne = document.getElementById('one')
let innerHTML_string =ElementOne.innerHTML
let innerText_string=ElementOne.innerText
let textContent_string=ElementOne.textContent

//透過js來新增2行<p></p>
let msg ='<p>textContent:' + textContent_string + '</p>'
msg += '<p>innerText:'+innerHTML_string+'</p>'

//更改內容
let ElementResults=document.getElementById('scriptResults')
ElementResults.innerHTML=msg
ElementOne.textContent ='被取代了'