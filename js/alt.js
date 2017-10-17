var toDoItems = [];
var doneItems = [];

$('#to-do-form').submit(function() {
    event.preventDefault();
    toDoItems.push($('#to-do-item').val());
    makeList('to-do');
    console.log('to do: ' + toDoItems);
});

function makeList(list_type) {
    if (list_type == 'to-do') {
        var col = '#col-to-do ol';
        var itemsArray = toDoItems;
        var change = true;
    } else {
        var col = '#col-done ol';
        var itemsArray = doneItems;
    }
    $(col).empty();

    for (var i = 0; i<itemsArray.length; i++) {
        if (change) {
            $(col).append('<li><input type="checkbox" onchange="moveToDone(\'+i+\')">' + itemsArray[i] + '</li>');
        } else {
            $(col).append('<li>' + itemsArray[i] + '</li>');
        }
    }
}

function moveToDone(i) {
    doneItems.push(toDoItems.pop(i));
    makeList('to-do');
    makeList('done');
    console.log('done: ' + doneItems);
}

