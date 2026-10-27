import { tasks, deleteTask, moveTask } from './store.js';

function createCard(task) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const title = document.createElement('h3');
    title.className = 'card__title';
    title.textContent = task.title;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'card__checkbox';
    checkbox.id = 'task-' + task.id;
    if (task.status === 'done') checkbox.checked = true;
    
    checkbox.addEventListener('change', () => {
        moveTask(task.id);
        render();
    });
    
    const label = document.createElement('label');
    label.className = 'card__label';
    label.htmlFor = 'task-' + task.id;
    label.textContent = 'Выполнено';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
        render();
    });
    
    card.append(title, checkbox, label, deleteBtn);
    return card;
}

export function render() {
    const todoCol = document.querySelector('.column--todo');
    const progCol = document.querySelector('.column--progress');
    const doneCol = document.querySelector('.column--done');
    
    if (!todoCol) return; // Если мы не на странице задач, выходим
    
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput ? searchInput.value.toLowerCase() : '';
    
    todoCol.querySelectorAll('.card').forEach(c => c.remove());
    progCol.querySelectorAll('.card').forEach(c => c.remove());
    doneCol.querySelectorAll('.card').forEach(c => c.remove());
    
    tasks.forEach(task => {
        if (searchText && !task.title.toLowerCase().includes(searchText)) {
            return;
        }
        
        const card = createCard(task);
        if (task.status === 'todo') todoCol.appendChild(card);
        if (task.status === 'progress') progCol.appendChild(card);
        if (task.status === 'done') doneCol.appendChild(card);
    });
}