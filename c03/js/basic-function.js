function updateMessage(message1)   //建立一個方法使id為'message'的內容更替為參數
{
    let message_element=document.getElementById('message');
    message_element.innerText=message1;  
}

let msg="加入會員可以得到10%off的餐券";  //更改的內容
updateMessage(msg);