


let users = [];
let userId = 1;

// Функция добавления пользователя
function addUser() {
    const userName = document.getElementById('userName').value;
    if (userName.trim() !== '') {
        const user = { id: userId++, name: userName };
        users.push(user);
        document.getElementById('userName').value = ''; // очистка поля
        renderTable();
    } else {
        alert('Please enter a name.');
    }
}

// Функция редактирования пользователя
function editUser(id) {
    const newName = prompt('Enter new name:');
    if (newName) {
        const user = users.find(user => user.id === id);
        user.name = newName;
        renderTable();
    }
}

// Функция удаления пользователя
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderTable();
}

// Функция для отображения пользователей в таблице
function renderTable() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = ''; // очистка таблицы перед рендерингом

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>
                <button onclick="editUser(${user.id})"></button>
                <button onclick="deleteUser(${user.id})">delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}