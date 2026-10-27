// Стартовые задачи
const initialTasks = [
    { id: 1, title: 'Изучить основы HTML', status: 'todo' },
    { id: 2, title: 'Сверстать страницу по макету', status: 'progress' },
    { id: 3, title: 'Прочитать методичку по JS', status: 'done' }
];

// Загружаем из localStorage или берем стартовые
export let tasks = JSON.parse(localStorage.getItem('tasks')) || initialTasks;

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function addTask(title) {
    tasks.push({ id: Date.now(), title: title, status: 'todo' });
    save();
}

export function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    save();
}

export function moveTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (task.status === 'todo') task.status = 'progress';
    else if (task.status === 'progress') task.status = 'done';
    
    save();
}