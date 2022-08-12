const todosForm = document.querySelector('.todoForm');
const list = document.querySelector('.list');

let ToDoListArr = [];
const STORAGE_LISTS = 'ToDoList';

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (name.length == 0) return;
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };
  ToDoListArr.push(item);
  e.currentTarget.reset();
  displayItems();
  saveDatas();
}

function displayItems() {
  if (!ToDoListArr) return;
  const html = ToDoListArr.map(
    (item) => `<li class="todo-list" id=${item.id}>
        <input type="checkbox">
        <span class="itemName">${item.name}</span>
        <button class="delete">&times;</button>
        </li>`
  ).join('');
  list.innerHTML = html;
}

function getLocalStarageData() {
  const loadedToDos = localStorage.getItem(STORAGE_LISTS);
  return loadedToDos;
}

function saveDatas() {
  localStorage.setItem(STORAGE_LISTS, JSON.stringify(ToDoListArr));
}

//deleteEvent
document.body.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    let deleteId = e.target.closest('.todo-list').id;
    let deletedLists = ToDoListArr.filter((list) => deleteId != list.id);
    ToDoListArr = deletedLists;
    saveDatas();
    displayItems();
  }
});

function init() {
  if (getLocalStarageData(STORAGE_LISTS)) {
    ToDoListArr = JSON.parse(getLocalStarageData(STORAGE_LISTS));
  }
  todosForm.addEventListener('submit', handleSubmit);
  displayItems();
}

init();
