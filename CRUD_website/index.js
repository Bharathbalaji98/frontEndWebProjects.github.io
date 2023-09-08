/* 
1. Create a <h3> element that prints empty message on the screen when <ul> is empty. If any item is added to the <ul> remove the <h3> empty message.
    Also when all items are removed then add the <h3> empty message again. - DONE
2. Check if item field is empty. If yes don't add any item, instead throw an alert. - DONE
3. Once button is clicked, clear the item field. - DONE
4. Add buttons to move items up and down in the list. - DONE
5. Add border to the lists.
6. Add 2 more similar list boxes.
*/

let btn = document.getElementById('button-addon2')                                                                 // Add button element
let itemLst = document.getElementById('itemList')                                                           // <ul> tag
let inputItem = document.getElementById('inputItem')                                                        // item field
let emptyMessage = document.getElementById("emtyMsg")

btn.addEventListener('click', AddItem)                                                                      // 'Add' button event

function AddItem()                                                                                         //Add new item to the list
{
    if (emptyMessage)                                                                                        // check if list is empty.
    {
        emptyMessage.remove()
    }

    if (inputItem.value.length > 0)                                                                         // checks if the item field is empty.
    {
        let newLi = document.createElement('li')
        newLi.className = "list-group-item d-flex justify-content-between py-1"
        newLi.innerHTML = `<h6 class="flex-grow-1">${inputItem.value}</h6>
                            <button class="btn btn-primary mx-1" onClick="moveUp(this)">&uarr;</button>
                            <button class="btn btn-primary mx-1" onClick="moveDown(this)">&darr;</button>
                            <button class="btn btn-danger" onClick="removeItem(this)">&#10005;</button>`
        itemLst.appendChild(newLi)                                                                          // Adding new list item to <ul>
        inputItem.value = ''
    }
    else {
        alert("Item field is empty to add any item.")
        if (itemLst.children.length <= 0)                                                                       // check if list is empty.
        {
            itemLst.appendChild(emptyMessage)
        }
    }
}

function removeItem(currentElement)                                                                         //Remove the item
{
    currentElement.parentElement.remove()                                                                   // removing item from the list
    if (itemLst.children.length <= 0)                                                                       // check if list is empty.
    {
        itemLst.appendChild(emptyMessage)
    }
}

function moveUp(currentElement){//currentElement = up arrow.

    //current item is the item for which the up arrow is clicked.
    let currentItem = currentElement.previousElementSibling.textContent;
    let previousElement; 
    let previousItem;
    let temp;
    //checking if the up arrow of 1st list item is clicked.
    if(currentElement.parentElement == itemLst.children[0]){
        //if yes, assigning the last item in the list as previous item
        previousElement = itemLst.children[(itemLst.children.length)-1];
    }  
    else{
        //if no asigning the prior item as previous item 
        previousElement = currentElement.parentElement.previousElementSibling;
    }
    previousItem = previousElement.children[0].textContent;
    //swapping the values of previous and current item
    temp = currentItem;
    currentItem = previousItem;
    previousItem = temp;
    //add items to the list
    currentElement.previousElementSibling.textContent = currentItem;
    previousElement.children[0].textContent = previousItem;
}

function moveDown(currentElement){
    //currentElement = down arrow. 
    let uparrow = currentElement.previousElementSibling;
    let nextElement;
    let nextItem;
    let temp;
    let currentItem;
    if(uparrow.parentElement == itemLst.children[itemLst.children.length-1])
    {
        nextElement = itemLst.children[0];    
    }
    else{
        nextElement = currentElement.parentElement.nextElementSibling; 
    }
    currentItem = uparrow.previousElementSibling.textContent;       //=>c
    nextItem = nextElement.children[0].textContent;                 //=>a
    temp = currentItem;                                             //temp<-c
    currentItem = nextItem;                                         //currentItem<-a
    nextItem = temp;                                                //nextitem<-c
    uparrow.previousElementSibling.textContent = currentItem;
    nextElement.children[0].textContent = nextItem;
}