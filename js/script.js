var body = document.getElementsByName('body'[0]);
var $ = function(id) {
    return document.getElementById(id);
}

var head= $('header').classList.add('text-center');
var list = document.createElement('ul');
var toDo = $('col-1').appendChild(list).textContent = 'To Do';
var button= $('addToList');

let toDoList = [];


button.addEventListener('click', function() {
    var input = $('input-field').value;
    //alert (input);
    var toDoLi = document.createElement('li');
    toDoLi.innerHTML = input;
    list.appendChild(toDoLi);
    //toDoList.push(input);
   // console.log(toDoList);
});




//appendChild(document.createTextNode(inputValue))


// button.addEventListener('click', function(){
//     if (typeof inputValue === 'string' || inputValue instanceof String) {
//         console.log(inputValue);
//     }
// });

// var body = document.getElementsByName('body'[0]);
// var $ = function(id) {
//     return document.getElementById(id);
// }
//
// var head= $('header').classList.add('text-center');
//
// var list = document.createElement('ul');
// var toDoLi = document.createElement('li');
// var toDo = $('col-1').appendChild(list).textContent = 'To Do';
// var inputValue = document.forms[0].text.value;
//
// var button= $('submit');
// button.addEventListener('click', function(){
//
//     if (typeof inputValue === 'string' || inputValue instanceof String) {
//         toDoLi.innerHTML = inputValue;
//         list.appendChild(toDoLi);
//     }
// });
