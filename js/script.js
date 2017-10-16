var body = document.getElementsByName('body'[0]);
var $ = function(id) {
    return document.getElementById(id);
}

var head = $('header').classList.add('text-center');
var list = document.createElement('ol');
var list2 = document.createElement('ol');
list.setAttribute('style', 'font-size: 18px; color: #4164bf; margin-left: 100px; text-decoration: underline;');
list2.setAttribute('style', 'font-size: 18px; color: #ed2715; margin-left: 100px; text-decoration: underline;');
var toDo = $('col-1').appendChild(list);
var done = $('col-2').appendChild(list2);
var button = $('addToList');


button.addEventListener('click', function clickButton() {
    let input = $('input-field').value;
    list.innerHTML = '';
    list2.innerHTML = '';
    if (input.length>0) {
        var toDoLi;
        for (var i = 0; i<toDoList.length;i++) {
            var checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.setAttribute('style', 'float: right; margin-right: 80px;')
            toDoLi = document.createElement('li');
            toDoLi.innerHTML = toDoList[i];
            list.appendChild(toDoLi);
            toDoLi.appendChild(checkBox);
        }
        toDoList.push(input)
        console.log(toDoList);
     }
});

let toDoList = [];

