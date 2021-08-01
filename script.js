

let enterCheckbox = document.querySelector('input[name="enter-todo"]');
enterCheckbox.addEventListener('click', getNewItem);

let unorderedList = document.querySelector('.listView');



function getNewItem(){
    //checks if the checkbox OR enter key is press AND that there's content within
    if(enterCheckbox.checked === true){
        
        appendListItem(document.querySelector('#input-todo').value);

    }else if(enterCheckbox.checked === false){//once checkbox is unmarked, resets. 
        document.querySelector('#input-todo').value = '';
    }
}


function appendListItem(todoItem){

    let todoID = unorderedList.getElementsByTagName('li').length;

    let listItem = document.createElement('li');
    listItem.setAttribute('id', 'li'+todoID);

    let liContainer = document.createElement('div');
    liContainer.setAttribute('class', 'listItem');
    liContainer.setAttribute('id', 'div' + todoID);
    let completionCheckbox = document.createElement('input');
    completionCheckbox.setAttribute('type', 'checkbox');
    completionCheckbox.setAttribute('name', 'name'+todoID);
    completionCheckbox.setAttribute('onClick', 'completeTodoItem(this)');
    let todoContent = document.createElement('span');
    todoContent.textContent = todoItem;
    let deleteSpan = document.createElement('span');
    deleteSpan.setAttribute('id', todoID);
    deleteSpan.setAttribute('class', 'close');
    deleteSpan.setAttribute('onClick', 'deleteTodoItem(this)');
    deleteSpan.textContent = "X";

    liContainer.appendChild(completionCheckbox);
    liContainer.appendChild(todoContent);
    liContainer.appendChild(deleteSpan);
    listItem.appendChild(liContainer);
    unorderedList.appendChild(listItem);

}

function completeTodoItem(item){
    
    let completionCheckbox = document.querySelector('input[name='+item.name+']');
    let parentElem = completionCheckbox.parentElement;
    console.log(parentElem);
    if (completionCheckbox.checked === true){
        parentElem.querySelector('span').style.textDecoration = 'line-through';
        
    }else{
        parentElem.querySelector('span').style.textDecoration = 'none';
    }
}

function deleteTodoItem(item){

    unorderedList.querySelector('#li' +item.id).remove();

}

