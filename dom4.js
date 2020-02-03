var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItem);

//add item function
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li item
    var li = document.createElement('li');

    //add li classname
    li.className = 'list-group-item';

    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var deleteBtn = document.createElement('button');

    //add classes for delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append textnode for delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);

}

//remove item function
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter item function
function filterItem(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();

    //get List
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}