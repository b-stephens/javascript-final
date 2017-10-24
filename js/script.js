var $ = function(id) {
    return document.getElementById(id);
};

var toDoList = [];
var doneList = [];

var addToList = $('add-button');
addToList.addEventListener('click', function() {
    event.preventDefault();
    var textField = $('input-field').value;
    if (textField.length>0) {
        toDoList.push(textField);
        makeList('to-do');
        document.forms[0].reset();
        console.log('to-do: ' + toDoList);
    } else {
        alert ('Please enter an item');
    };
});

function makeList(list_type) {
    if(list_type == 'to-do') {
        var col = $('to-do-list');
        var itemsArray = toDoList;
        var change = true;
    } else {
        var col = $('done-list');
        var itemsArray = doneList;
    }
    col.innerHTML = '';

    for(var i = 0; i<itemsArray.length; i++) {
        if (change) {
            var listItem = document.createElement('li');
            var editBtn = document.createElement('button');
            var doneBtn = document.createElement('button');

            listItem.innerHTML = itemsArray[i];
            listItem.appendChild(editBtn);
            listItem.appendChild(doneBtn);

            editBtn.innerText = ('Edit');
            editBtn.setAttribute('type', 'button');
            editBtn.setAttribute('style', 'position: absolute; right: 90px; font-family: Playfair Display SC, serif;')
            editBtn.classList.add('btn', 'btn-sm', 'btn-default');

            editBtn.addEventListener('click', function() {                  /* definitely wrong */
                let newValue = prompt(itemsArray[i])
                newValue = itemsArray[i];
            });

            doneBtn.innerText = ('Done');
            doneBtn.setAttribute('type', 'button');
            doneBtn.setAttribute('style', 'position: absolute; right: 30px; font-family: Playfair Display SC, serif;');
            doneBtn.classList.add('btn', 'btn-sm', 'btn-danger');

            doneBtn.addEventListener('click', delayDoneList, moveToDone);
            doneBtn.addEventListener('click', function() {
                listItem.setAttribute('style', 'text-decoration: line-through');
            });
            col.appendChild(listItem);

        } else {

            var doneItems = document.createElement('li');
            doneItems.innerHTML = itemsArray[i];
            col.appendChild(doneItems);

            var clearDoneList = $('clearBtn');
            clearDoneList.addEventListener('click', function() {
                var deleteList = confirm ('Are you sure you want to delete this list?');
                if (deleteList == true) {
                    col.innerHTML = '';
                    doneList = [''];
                    return true;
                } else {                    /* Have to click "ok" or "cancel" more and more to get it to work; add items, clear, add more items, clear again */
                    return false;
                }
            });
        };
    };
};

function moveToDone(i) {
    doneList.push(toDoList.splice(i, 1));    /* moves first "to do" item to "done" list, need to get the list item with the button clicked to move*/
    makeList('to-do');
    makeList('done');
    console.log('done: ' + doneList);
};

var timer
function delayDoneList() {
    timer = setTimeout(moveToDone, 2000);
};












