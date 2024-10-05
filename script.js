function addItem() {
    var item = document.getElementById('item').value;
    if (item === '') return; // Don't add empty items

    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.appendChild(document.createTextNode(item));

    document.getElementById('grocery-list').appendChild(listItem);

    // Clear input
    document.getElementById('item').value = '';
}
