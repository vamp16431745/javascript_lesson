//按下Add List Item 會增加一個新的<li>
let addElement = document.querySelector('a.add')
//元素選取器(要去抓class裡的a的add)
let ulElement = document.querySelector('#list')

let counterElement = document.getElementById('counter')

addElement.addEventListener('click', (event) => {
    console.log('click')
    event.preventDefault();  //預防點擊後連結至超連結

    //按下Add List Item 會增加一個新的<li>
    let liElement = document.createElement('li')
    let textnode = document.createTextNode("new Item")
    liElement.appendChild(textnode)  //appendChild加入某個節點  才能被看見
    ulElement.appendChild(liElement)

})


//mutationObserver(追蹤 DOM 的變化，無論是子節點的變動或內容、屬性的變動，並且獲得相關的資訊，以便作出後續的行動。)
const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver((mutationsList, observer) => {
    let listItems = ulElement.getElementsByTagName('li').length;
    counterElement.innerText = listItems;
});

observer.observe(ulElement, config);