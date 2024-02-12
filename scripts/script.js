let arrayTodo = []; 

const buttonAdd = document.querySelector(".add-button");
const checkboxTasks = document.querySelector('.checkbox'); 
const inputTodo = document.querySelector('.input');
const allButton = document.querySelector('.all-button');
const activeButton = document.querySelector('.active-button');
const completedButton = document.querySelector('.completed-button');
const tasksList = document.querySelector('.tasks-list');
let buttonDelete = document.querySelectorAll('.delete-button');


// button add tasks
const addTodo = function (event) {
    
    if(event.keyCode === 13 || event.type === 'click') {
        if(inputTodo.value.trim() !== '') {

        const todo = {
            id: Date.now(),
            text: inputTodo.value.trim(),
            isChecked: false,
        };
        arrayTodo.push(todo);
        inputTodo.value='';
        renderTodos();
        };
    };
    console.log(arrayTodo);
};

// render tasks
function renderTodos () {  
    tasksList.innerHTML = ''; 
    arrayTodo.forEach((i) => {
        tasksList.innerHTML +=    
        `<div class="sticky-md-top p-3 bg-info">
        <input type="checkbox" id ${i.id} ${i.isChecked ? 'checked' : false}>
        <span class="text-todo" ondblclick='enableEditing()'>${i.text}</span>
        <button class='delete-button btn btn-outline-danger' id=${i.id}>del</button>
        </div>`
    });
    
};

//
const deleteTask = (event) => {
    console.log(event.target.id);
    const indexArrayTodo = arrayTodo.findIndex((element) => {
        element.id === event.target.id;
    });
    arrayTodo.splice(indexArrayTodo, 1);
    renderTodos();
    console.log(arrayTodo);
};

// includes all checkbox
let checkboxAll = () => {
    for (let i = 0; i < arrayTodo.length; i++) {
        arrayTodo[i].isChecked = checkboxTasks.checked;
    }
    renderTodos();
};

// delete a task at the click of a button
const checkTaskDivClicks = (event) => {
    switch (true) {
    case event.target.classList.contains('delete-button'):
        deleteTask(event);
        break;
    default:
        break;
    }
}


buttonAdd.addEventListener('click', addTodo);
inputTodo.addEventListener('keypress', addTodo); // enter
checkboxTasks.addEventListener('change', checkboxAll);
tasksList.addEventListener('click', checkTaskDivClicks);

//??изменение текста по двойному щелчку?? --черновой вариант--
function enableEditing() {
    let editableText = document.querySelector('.text-todo');
    editableText.contentEditable = true;
    editableText.focus();

    editableText.addEventListener('blur', ()=> {
        editableText.contentEditable = false;
    });
}
