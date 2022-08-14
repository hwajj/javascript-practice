const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//상태 관리할 배열
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('Submitted');

  //form내부에 name으로 접근가능
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  //e.currentTarget.item.value = '';
  e.currentTarget.reset();

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox" value="${item.id}"
      ${item.complete ? 'checked' : ''}>
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}"
      value="${item.id}"
      >&times;</button>
      </li>`
    )
    .join('');

  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
  //console.info('Saving items to localstorage');
}

function restoreFromLocalStorage() {
  //console.info('restoring from LS');

  const lsItems = JSON.parse(localStorage.getItem('items'));

  if (lsItems && lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id != id);
  // console.log('DELETING ITEM!');
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  // console.log('Marking as complete!', id);

  const itemRef = items.find((item) => item.id == id);

  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

list.addEventListener('click', function (e) {
  //console.log(e.target, e.currentTarget);
  if (e.target.matches('button')) {
    deleteItem(e.target.value);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(e.target.value);
  }
});

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('itemsUpdated', displayItems);

restoreFromLocalStorage();
