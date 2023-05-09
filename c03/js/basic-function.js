function updateMessage(message)
{
    let message_element=document.getElementById('message');
    message_element.innerText=message;
}

let msg="加入會員可以得到10%off的餐券";
updateMessage(msg);