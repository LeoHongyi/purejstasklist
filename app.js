const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listener;
loadEventListeners();

//load all event listners;
function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup',filtertasks);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
        return;
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className  = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
   // if (li.textContent !== '') {
        taskList.appendChild(li);
    //}
    // console.log(li);
    taskInput.value = '';

    e.preventDefault();

}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('you sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filtertasks(e) {

    const text = e.target.value.toLowerCase();
    //
     document.querySelectorAll('.collection-item').forEach(function (task) {

         const item = task.firstChild.textContent;
        console.log(text);
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

     });
}