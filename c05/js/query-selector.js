let first_element=document.querySelector('li.hot');
first_element.className = 'cool';

let all_element = document.querySelectorAll('li.hot');
console.log(all_element.length);

/*all_element.forEach((currentElement)=>
{
    currentElement.className='cool';



})*/

for(let i=0;i<all_element.length;i++)
{
    all_element[i].className='cool';

}