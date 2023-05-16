//按下Add List Item 會增加一個新的<li>
let addElement= document.querySelector('a.add')
//元素選取器(要去抓class裡的a的add)
let ulElement=document.querySelector('#list')

addElement.addEventListener('click',(event)=>{
    console.log('click')
    event.preventDefault();  //預防點擊後連結至超連結

    //按下Add List Item 會增加一個新的<li>
    let liElement=document.createElement('li')
    let textnode=document.createTextNode("new Item")
    liElement.appendChild(textnode)
    ulElement.appendChild(liElement)


})