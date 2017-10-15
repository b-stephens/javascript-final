var body = document.getElementsByName('body'[0]);
var $ = function(id) {
    return document.getElementById(id);
}

var head = $('header').classList.add('text-center');
var list = document.createElement('ol');
var list2 = document.createElement('ol');
list.setAttribute('style', 'font-size: 18px; color: #4164bf; margin-left: 100px; text-decoration: underline; font-family: Coming Soon, cursive;');
list2.setAttribute('style', 'font-size: 18px; color: #ed2715; margin-left: 100px; text-decoration: underline; font-family: Coming Soon, cursive;');
var toDo = $('col-1').appendChild(list);
var done = $('col-2').appendChild(list2);
var input = $('inputField');
var button = $('addToList');
var toDoList = new Array();


var addToList = function(inputField) {
    addToArray(inputField);
    refreshList();
};

var addToArray = function(text) {
    toDoList.push(input.value);
};

var refreshList = function() {
    list.innerHTML = '';
    list2.innerHTML = '';
    var listItem;
    for (var i = 0; i<toDoList.length; i++) {
        var checkBox = document.createElement ('checkbox');
        checkBox.type = 'checkbox';
        listItem = document.createElement('li');
        listItem.innerHTML = toDoList[i];
        list.appendChild(listItem);
        listItem.appendChild(checkBox);
    };
};

button.addEventListener('click', function(e) {
    var inputField = input.value;
    addToList(inputField);
    refreshList();
});

console.log(addToArray());