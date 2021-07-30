

let enterCheckbox = document.querySelector('input[name="enter-todo"]');
enterCheckbox.addEventListener('click', getNewItem);

let list = document.querySelector('li');




let todoArray = [

];


function getNewItem(){
    if(enterCheckbox.checked === true){ //&& document.queryselector('enter-todo').textContent checks if it's empty

        todoArray.push(
            {value: document.querySelector('#input-todo').value, 
            state: true,
            id : ''}
        );

        let list = document.querySelector('ul');

        
           appendListItems();


        

        console.log(todoArray);
    }else if(enterCheckbox.checked === false){
        document.querySelector('#input-todo').value = '';
    }
}

function appendListItems(){
    // let listContainer = document.createElement('div');


    

    // if(todoArray.length > 1){

    //     list.removeChild(listContainer);

    // }

    for(let i=0; i < todoArray.length; i++){

        todoArray[i].id = i;

        let liContainer = document.createElement('div');
        liContainer.setAttribute('class', 'listItem');
        let completionCheckbox = document.createElement('input');
        completionCheckbox.setAttribute('type', 'checkbox');
        completionCheckbox.setAttribute('name', i);
        let todoContent = document.createElement('span');
        todoContent.textContent = todoArray[i].value;
        let deleteSpan = document.createElement('span');
        deleteSpan.setAttribute('id', i);
        deleteSpan.setAttribute('class', 'close');
        deleteSpan.textContent = "X";


        liContainer.appendChild(completionCheckbox);

        liContainer.appendChild(todoContent);

        liContainer.appendChild(deleteSpan);

        list.appendChild(liContainer);

    }

}