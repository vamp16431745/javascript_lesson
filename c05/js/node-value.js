
//使用子節點nodeValue改變內容
let elementTwo =document.getElementById('two')
let nodeTwo = elementTwo.firstChild
console.log(nodeTwo.nodeValue)
nodeTwo.nodeValue=nodeTwo.nodeValue.replace('pine nuts','peanuts') 
//替換傳出的字串其實是創造一個新的字串
