const tasksList = document.querySelector('.tasks_list');
const button = document.querySelector('.new_tasks_add')
const input = document.getElementById("new_tasks_get");
button.addEventListener('click', createTask); // а работает вот это. разве это не одно и тоже?

function createTask(){
    const newListPoint = document.createElement('li');
    newListPoint.textContent = input.value;
    tasksList.append(newListPoint);
    input.value = "";

    newListPoint.addEventListener('click', function() {
        newListPoint.classList.toggle('strike')
    });
}

document.querySelector('.new_tasks_add').onclick = createTask(); // это вообще тут не нужно, просто мне интересно почему это не работает?