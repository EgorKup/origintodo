let arrayTodo = [];


const buttonAdd = document.querySelector(".add-button");
const checkbox = document.querySelector('.checkbox'); 
const inputTodo = document.querySelector('#input');
const allButton = document.querySelector('.all-button');
const activeButton = document.querySelector('.active-button');
const completedButton = document.querySelector('.completed-button');
const tasksList = document.querySelector('.tasks-list')

// --
buttonAdd.addEventListener('click', function () {
    console.log(inputTodo.value)
    inputTodo.value = '';
    render();
});



function render () {
    arrayTodo;
    tasksList.innerHTML +=

    `<div>
        <input type="checkbox" id ${1}>
        <input type="text">
        <button class='checked'>fsdfsdffs</button>
    </div>`

}







