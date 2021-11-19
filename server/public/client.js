console.log('JS is working!')
$(document).ready(onReady);

function onReady(){
    console.log('Jquery is working!')
    $('#add').on('click', addTask);
    $('#tasksTableBody').on('click', ".update-btn", completeTask);
    $('#tasksTableBody').on('click', '.delete-btn', deleteTask);
    renderTasks();
}

function addTask(){
    // console.log('I am clicking a button!')
    const newTask = {
        task: $('#taskToAdd').val(),
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).then((response) => {
        console.log('POST /tasks succeeded')
        $('#taskToAdd').val('')
        renderTasks();
    });

}

function renderTasks(){
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((response) => {
        $("#tasksTableBody").empty();
        console.log("GET /tasks response", response);
        for (let task of response) {
        $('#tasksTableBody').append(`
            <tr>
            <td>${task.task}</td>
            <td>${task.status}</td>
            <td><button class="update-btn" data-id="${task.id}" data-status="${task.status}">Task Complete</button></td>
            <td><button class="delete-btn" data-id="${task.id}">Delete</button></td>
            </tr>
        `);
        }
    });
}

function deleteTask(){
    const taskIdToDelete = $(this).data('id');
    $.ajax({
    type: 'DELETE',
    url: `/songs/${taskIdToDelete}`
    }).then((response) => {
    console.log(response);
    renderTasks();
    })
}

function completeTask(){
    const taskToUpdate = $(this).data('id');
    const currentStatus = $(this).data('status');

    console.log('taskToUpdate', taskToUpdate);
    console.log('currentStatus', currentStatus);
    $.ajax({
    type: 'PUT',
    url: `/tasks/${taskToUpdate}`,
    data: { currentStatus: currentStatus }
    }).then((res) => {
    renderTasks();
    }).catch((err) => {
    console.error(err);
    })
}