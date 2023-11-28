let users = {};

function addTask() {
    const userName = document.getElementById('userName').value;
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (!userName || userName.trim() === '') {
        alert('Please enter your name!');
        return;
    }

    if (!users[userName]) {
        users[userName] = [];
    }

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const task = taskInput.value;
    users[userName].push(task);

    updateTaskList();

    taskInput.value = ''; // Clear the input field after adding the task
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    let taskNumber = 1;

    for (const userName in users) {
        const userTasks = users[userName];
        const userTasksList = document.createElement('ul');

        userTasks.forEach(task => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${taskNumber++}. ${task}`));
            userTasksList.appendChild(li);
        });

        const userLi = document.createElement('li');
        const userNameElement = document.createElement('span');
        userNameElement.className = 'user-name';
        userNameElement.appendChild(document.createTextNode(userName));
        userLi.appendChild(userNameElement);
        userLi.appendChild(userTasksList);
        taskList.appendChild(userLi);
    }
}