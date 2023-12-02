let currentUser = '';

function setUsername() {
    const userNameInput = document.getElementById('userName');
    const taskList = document.getElementById('taskList');

    const userName = userNameInput.value.trim();

    if (!userName) {
        alert('Please enter a valid username!');
        return;
    }

    currentUser = userName;
    userNameInput.disabled = true;

    // Retrieve tasks for the current user from localStorage
    const userTasks = JSON.parse(localStorage.getItem(currentUser)) || [];

    // Display tasks for the current user
    updateTaskList(userTasks);
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (!currentUser) {
        alert('Please set a username first!');
        return;
    }

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const task = taskInput.value;
    const userTasks = JSON.parse(localStorage.getItem(currentUser)) || [];

    // Add the task to the user's task list
    userTasks.push(task);

    // Update localStorage with the new task list
    localStorage.setItem(currentUser, JSON.stringify(userTasks));

    // Update the displayed task list
    updateTaskList(userTasks);

    taskInput.value = ''; // Clear the input field after adding the task
}

function updateTaskList(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${index + 1}. ${task}`));
        taskList.appendChild(li);
    });
}
// Add a new function to find an existing user
function findUser() {
    const userNameInput = document.getElementById('userName');
    const taskList = document.getElementById('taskList');

    const userName = userNameInput.value.trim();

    if (!userName) {
        alert('Please enter a valid username!');
        return;
    }

    // Check if the user already exists
    if (localStorage.getItem(userName)) {
        currentUser = userName;
        userNameInput.disabled = true;

        // Retrieve tasks for the current user from localStorage
        const userTasks = JSON.parse(localStorage.getItem(currentUser)) || [];

        // Display tasks for the current user
        updateTaskList(userTasks);
    } else {
        alert('User not found. Please set a new user.');
    }
}
// Add a new function to delete the current user
function deleteUser() {
    const userNameInput = document.getElementById('userName');
    const taskList = document.getElementById('taskList');

    if (!currentUser) {
        alert('No user to delete. Please set or find a user first.');
        return;
    }

    // Remove tasks and the user from localStorage
    localStorage.removeItem(currentUser);

    // Clear the input field and enable it for setting a new user
    userNameInput.value = '';
    userNameInput.disabled = false;

    // Clear the current user
    currentUser = '';

    // Clear the displayed task list
    updateTaskList([]);
}
// Function to play the welcome sound using ResponsiveVoice.js
function playWelcomeSound() {
    // Check if ResponsiveVoice is available
    if (window.responsiveVoice) {
        // Use ResponsiveVoice to speak the welcome text
        responsiveVoice.speak("Welcome to our site", "US English Male", { volume: 1 });
    } else {
        // Fallback to Web Speech API if ResponsiveVoice is not available
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance("Welcome to our site!");
        synth.speak(utterance);
    }
}


// Call the function when the page loads
window.onload = playWelcomeSound;



// Example: Add a console log when the "Set User" button is clicked
document.getElementById('setUsername').addEventListener('click', function() {
    console.log('Set User button clicked!');
});

document.getElementById('findUser').addEventListener('click', function() {
    console.log('Find User button clicked!');
});


// Example: Add a console log when the "Add Task" button is clicked
document.getElementById('deleteUser').addEventListener('click', function() {
    console.log('Delete User button clicked!');
});

// Your existing JavaScript...





