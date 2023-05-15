//抓取屬性
let firstitem=document.getElementById('one')
if (firstitem.hasAttribute('class'))
{
    let classAttri_string=firstitem.getAttribute('class')
    let resultsElement=document.getElementById('scriptResults')
    resultsElement.innerHTML='<p>這第一個item的class屬性質為:'+classAttri_string +'</p>'
    
}