let textField = document.getElementById('textField');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');
addTaskBtn.addEventListener('click', function(){
    let taskText = textField.value.trim();
    if (taskText === ""){
        alert('Please enter a task.');
        return;
    }
    // Add a task
    let li = document.createElement('li');
    li.textContent = taskText;
    // Button for delete a task
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '- Delete';
    deleteBtn.style.marginLeft = '10px';
    // Delete handler
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(li);
    });
    // Attach delete button to side of a task
    li.appendChild(deleteBtn);
    // Add the list item to the task list
    taskList.appendChild(li);
    // Clear the input field
    textField.value = ''
});