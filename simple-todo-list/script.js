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
    li.style.marginBottom = '10px';
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    // Button for 'done'
    let doneBtn = document.createElement('button');
    doneBtn.textContent = '☑️ Done';
    doneBtn.style.marginLeft = '10px';
    // funtion for toggle 'done'
    function toggleDone() {
        taskSpan.classList.toggle('done');
        if (taskSpan.classList.contains('done')) {
            doneBtn.textContent = '↩️ Undone';
        } else {
            doneBtn.textContent = '☑️ Done';
        }
    }
    // click task or button to toggle
    taskSpan.addEventListener('click', toggleDone);
    doneBtn.addEventListener('click', toggleDone);
    // Button for delete a task
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️ Delete';
    deleteBtn.style.marginLeft = '10px';
    // Delete handler
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });
    // edit button
    let editBtn = document.createElement('button');
    editBtn.textContent = '✏️ Edit';
    editBtn.style.marginLeft = '10px';
    // function edit
    let isEditing = false;
    let editInput;
    editBtn.addEventListener('click', function () {
        if (!isEditing) {
            editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskSpan.textContent;
            // replace span with edit
            li.replaceChild(editInput, taskSpan);
            // change edit icon to save icon
            editBtn.textContent = "💾 Save";
            isEditing = true;
            // save using enter
            editInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    saveEdit();
                }
            });
        } else {
            saveEdit();
        }
        function saveEdit() {
            taskSpan.textContent = editInput.value;
            li.replaceChild(taskSpan, editInput);
            editBtn.textContent = '✏️ Edit';
            isEditing = false;
        }
    });
    li.appendChild(taskSpan);
    // Attach done button to side of a task
    li.appendChild(doneBtn);
    // Attach edit button
    li.appendChild(editBtn);
    // Attach delete button to side of a task
    li.appendChild(deleteBtn);
    // Add the list item to the task list
    taskList.appendChild(li);
    // Clear the input field
    textField.value = '';
});