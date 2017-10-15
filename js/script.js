var body = document.getElementsByName('body'[0]);
var $ = function(id) {
    return document.getElementById(id);
}

var head = $('header').classList.add('text-center');
var list = document.createElement('ol');
var list2 = document.createElement('ol');
list.setAttribute('style', 'font-size: 30px; color: #4164bf; margin-left: 100px; text-decoration: underline;');
list2.setAttribute('style', 'font-size: 30px; color: #ed2715; margin-left: 100px; text-decoration: underline;');
var toDo = $('col-1').appendChild(list).textContent ='To Do';
var done = $('col-2').appendChild(list2).textContent ='Done';
var button = $('addToList');



button.addEventListener('click', function() {
    let input = $('input-field').value;
    if (input.length>0) {
        var toDoLi;
        for (var i = 0; i<toDoList.length;i++) {
            var checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            toDoLi = document.createElement('li');
            toDoLi.innerHTML = toDoList[i];
            list.appendChild(toDoLi);
            toDoLi.appendChild(checkBox);
        }



        //toDoLi.setAttribute('style', 'color: #000; font-size: 18px; text-decoration: none; margin-left: -30px; font-family: Coming Soon, cursive; font-size: 25px;');
        toDoList.push(input)
        console.log(toDoList);
     }
});

let toDoList = [];


//appendChild(document.createTextNode(inputValue))


// button.addEventListener('click', function() {
//     let input = $('input-field').value;
//     if (input.length>0) {
//         let toDoLi = document.createElement('li');
//         toDoLi.innerHTML = input;
//         list.appendChild(toDoLi);
//         toDoLi.setAttribute('style', 'color: #000; font-size: 18px; text-decoration: none; margin-left: -30px; font-family: Coming Soon, cursive; font-size: 25px;');
//         toDoList.push(input)
//         console.log(toDoList);
//     }
// });