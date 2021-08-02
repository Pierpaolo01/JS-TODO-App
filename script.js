

let enterCheckbox = document.querySelector('input[name="enter-todo"]');
enterCheckbox.addEventListener('click', getNewItem);

let unorderedList = document.querySelector('.listView');



function getNewItem(){
    if(enterCheckbox.checked === true){
        
        appendListItem(document.querySelector('#input-todo').value);
        updateCounter();
    }else if(enterCheckbox.checked === false){//once checkbox is unmarked, resets. 
        document.querySelector('#input-todo').value = '';
    }
}


function appendListItem(todoItem){

    let todoID = unorderedList.getElementsByTagName('li').length;

    let listItem = document.createElement('li');
    listItem.setAttribute('id', 'li'+todoID);

    let liContainer = document.createElement('div');
    liContainer.setAttribute('class', 'listItem liView');
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
    if (completionCheckbox.checked === true){
        parentElem.querySelector('span').style.textDecoration = 'line-through';
        updateCounter();
        
    }else{
        parentElem.querySelector('span').style.textDecoration = 'none';
        updateCounter();
    }


}

function deleteTodoItem(item){

    unorderedList.querySelector('#li' +item.id).remove();
    updateCounter();

}

function updateCounter(){

    let totalLi = unorderedList.childElementCount; 

    let checked = 0;

    for(let i=0; i < totalLi; i++){

        let completionCheckbox = unorderedList.childNodes[i].querySelector('input[type="checkbox"]');
                if(completionCheckbox){
                    if(completionCheckbox.checked === true){
                        checked = 1 + checked;
                    }
                }
            }

    let itemCount = document.querySelector('#itemCount');
    itemCount.textContent = (totalLi-checked) + " Items remaining ";

}

function clearChecked(){
    let ulLength = unorderedList.childElementCount;
    let delItems = [];

    for(let i=0; i < ulLength; i++){
    
            let completionCheckbox = unorderedList.childNodes[i].querySelector('input[type="checkbox"]');
            if(completionCheckbox){
                if(completionCheckbox.checked === true){
                    
                    delItems.push(unorderedList.childNodes[i].querySelector('input[type="checkbox"]'));
                }
            }
        }

        for(let i=0; i < delItems.length; i++){
            liRemove = delItems[i].parentElement;
            liRemove.parentElement.remove();
        }

        showAll()
}

function showCompleted(){

    let ulLength = unorderedList.childElementCount;
    
    for(let i=0; i < ulLength; i++){
    
            let completionCheckbox = unorderedList.childNodes[i].querySelector('input[type="checkbox"]');
            if(completionCheckbox){
                if(completionCheckbox.checked === false){
                    let hideParent = completionCheckbox.parentElement;
                    hideParent.style.display = 'none';
                }else if(completionCheckbox.checked === true){
                    let hideParent = completionCheckbox.parentElement;
                    hideParent.style.display = 'flex';
                }
            }
        }


}

function showActive(){

    let ulLength = unorderedList.childElementCount;

    for(let i=0; i < ulLength; i++){
    
            let completionCheckbox = unorderedList.childNodes[i].querySelector('input[type="checkbox"]');
            if(completionCheckbox){
                if(completionCheckbox.checked === true){
                    let hideParent = completionCheckbox.parentElement;
                    hideParent.style.display = 'none';

                }else if(completionCheckbox.checked === false){
                    let hideParent = completionCheckbox.parentElement;
                    hideParent.style.display = 'flex';
                }
            }
        }


}

function showAll(){

    let ulLength = unorderedList.childElementCount;

    for(let i=0; i < ulLength; i++){
    
            let liContainer = unorderedList.childNodes[i].querySelector('li, div');
            liContainer.style.display = 'flex';
            liContainer.setAttribute('class', 'listItem');

        }


}
