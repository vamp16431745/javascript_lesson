//點擊後移除<li>

document.getElementById('shoppingList')
    .addEventListener
    ('click',
        function (event) 
        {
            event.preventDefault();
            let liElement=event.target.parentNode;
            // let ulElement=event.currentTarget;
            // ulElement.removeChild(liElement);
            liElement.remove();

        });