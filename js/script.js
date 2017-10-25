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
        if (change) { //Are you checking for the var change globally, or on each individual todo item?
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
                let newValue = prompt(itemsArray[i])/*Remember that newValue (since it's a let) will ONLY exist in the scope of this callback.
                What you are doing here is setting the value of newValue to the response the user is going to give you when you prompt them with itemsArray[i]. 
                But how will you access newValue outside of this callback?
               */
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

            var clearDoneList = $('clearBtn'); //WHY WHY JQUERY?!?!?!? WHYYY!!!???
            clearDoneList.addEventListener('click', function() {
                var deleteList = confirm ('Are you sure you want to delete this list?');
                if (deleteList == true) {
                    col.innerHTML = '';
                    doneList = [''];
                    return true; //Why are you returning true else false here? The functionality you need is accomplished from ln. 77-78
                } else {                    /* Have to click "ok" or "cancel" more and more to get it to work; add items, clear, add more items, clear again */
                    return false;
                }
            });
        };
    };
};

function moveToDone(i) { //In this function, if you console.log what i is, it will be undefined. Where are you passing in the value of "i" when you call the moveToDone() function? Remember that this is where you are declaring the fn, not where you are calling it, so the arguments passed here are just placeholders. The spot where you call the function is where you pass in a legit value.
    doneList.push(toDoList.splice(i, 1));    /* moves first "to do" item to "done" list, need to get the list item with the button clicked to move*/
    makeList('to-do');
    makeList('done');
    console.log('done: ' + doneList);
};

var timer
function delayDoneList() {
    timer = setTimeout(moveToDone, 2000);
};

//OVERALL: This looks great!












