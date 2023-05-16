//滑鼠移動到body觸發
let bodyElement=document.getElementById('body')
let sx=document.getElementById('sx')//抓取screenX
let sy=document.getElementById('sy')//抓取screeny
let px=document.getElementById('px')//抓取pageX
let py=document.getElementById('py')//抓取pagey
let cx=document.getElementById('cx')//抓取clientx
let cy=document.getElementById('cy')//抓取clienty

//顯示滑鼠位置現在在哪個座標
bodyElement.addEventListener('mousemove',(event)=>{
    sx.value=event.screenX
    sy.value=event.screenY
    px.value=event.pageX
    py.value=event.pageY
    cx.value=event.clientX
    cy.value=event.clientY

})