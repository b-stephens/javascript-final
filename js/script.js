var body = document.getElementsByName('body'[0]);
var $ = function(id) {
    return document.getElementById(id);
}

var head = $('header').classList.add('text-center');
var list = document.createElement('ol');
var list2 = document.createElement('ol');
list.setAttribute('style', 'font-size: 30px; color: #4164bf; margin-left: 100px; text-decoration: underline;');
list2.setAttribute('style', 'font-size: 30px; color: #4164bf; margin-left: 100px; text-decoration: underline;');
var toDo = $('col-1').appendChild(list).textContent ='To Do';
var done = $('col-2').appendChild(list2).textContent ='Done';
var button = $('addToList');

var completed = document.createElement('button');
completed.style.float = 'right';
completed.innerHTML = 'Completed';
completed.classList.add('btn-md', 'btn-success');

let toDoList = [];


button.addEventListener('click', function() {
    let input = $('input-field').value;
    let toDoLi = document.createElement('li');
    toDoLi.innerHTML = input;
    list.appendChild(toDoLi);
    toDoLi.appendChild(completed);
    toDoLi.setAttribute('style', 'color: #000; font-size: 18px; text-decoration: none; margin-left: -30px; font-family: Coming Soon, cursive; font-size: 25px;');
    //toDoList.push(input);
    //console.log(toDoList);
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
