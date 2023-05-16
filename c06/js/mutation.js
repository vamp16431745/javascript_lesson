//按下Add List Item 會增加一個新的<li>
let addElement= document.querySelector('a.add')
//元素選取器(要去抓class裡的a的add)

addElement.addEventListener('click',(event)=>{
    console.log('click')
    event.preventDefault();  //預防點擊後連結至超連結


})