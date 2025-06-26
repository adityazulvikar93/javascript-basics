"use strict";
let textField = document.getElementById('textField');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');
addTaskBtn.addEventListener('click', function () {
    let taskText = textField.value.trim();
    if (taskText === "") {
        alert('Please enter a task.');
        return;
    }
    // Add a task
    let li = document.createElement('li');
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    // Button for 'done'
    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.style.marginLeft = '10px';
    // funtion for toggle 'done'
    function toggleDone() {
        taskSpan.classList.toggle('done');
        if (taskSpan.classList.contains('done')) {
            doneBtn.textContent = 'Undone';
        } else {
            doneBtn.textContent = 'Done';
        }
    }
    // click task or button to toggle
    taskSpan.addEventListener('click', toggleDone);
    doneBtn.addEventListener('click', toggleDone);
    // Button for delete a task
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '- Delete';
    deleteBtn.style.marginLeft = '10px';
    // Delete handler
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });
    li.appendChild(taskSpan);
    // Attach done button to side of a task
    li.appendChild(doneBtn);
    // Attach delete button to side of a task
    li.appendChild(deleteBtn);
    // Add the list item to the task list
    taskList.appendChild(li);
    // Clear the input field
    textField.value = '';
});