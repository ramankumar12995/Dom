//Examine the document Object//

// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 'Hey Baby';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.all[10].textContent = 'Hello World');
// console.log(document.all[10].style.color = 'red');
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//---------GetElementById----------//

// console.log(document.getElementById('header-title'));

// var headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.textContent = 'Welcome To India';
// headertitle.innerText = 'Good Bye'
// console.log(headertitle.innerText);
// headertitle.innerHTML = '<h1>Welcome Again</h1>'

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 4px red'

// var main = document.getElementById('main');
// main.style.backgroundColor = 'coral'


//------------GetElementByClassName-----------//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'This is Item 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'coral'


//Gives Error
//items.style.backgroundColor = 'coral'
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'coral'
// }

//--------------GetElementByTagName-----------//

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'This is Item 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'coral'


// //Gives Error
// //items.style.backgroundColor = 'coral'
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'coral'
// }

//----------------QuerySelectors--------------//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 8px coral'

// var input = document.querySelector('input');
// input.value = 'Please add items'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'
// var lastchild = document.querySelector('.list-group-item:last-child');
// lastchild.style.color = 'green'
// lastchild.style.fontWeight = 'bold'
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = "green"
// var title = document.querySelector('.title');
// title.style.color = "green"


//------------QuerySelectorAll----------------//

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// for (var i = 0; i < titles.length; i++) {
//     titles[0].style.color = 'green'
//     titles[1].style.color = 'red'
//     titles[0].textContent = 'Traversy Media'
// }

// var items = document.querySelectorAll('li');
// for (var a = 0; a < items.length; a++) {
//     if (a % 2 == 0) {
//         items[a].style.backgroundColor = 'coral'
//     } else {
//         items[a].style.backgroundColor = 'lightgreen'
//     }
// }

// var main = document.querySelector('#main');
// main.style.backgroundColor = 'pink'

//-------------Traversing The Dom---------------//

//var itemlist = document.querySelector('#items');
//----------ParentNode---------------------//
//console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'coral'
// console.log(itemlist.parentNode.parentNode.parentNode)

//----------ParentElement-----------------//
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'coral'
// console.log(itemlist.parentElement.parentElement.parentElement)


//-----------ChildNodes------------------------//
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'red'

//-------FirstChild-------------//
//console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1'


//-------LastChild-------------//
//console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 4'

// for (var i = 0; i < itemlist.length; i++) {
//     if (i % 2 == 0) {
//         itemlist[i].style.backgroundColor = 'coral'
//     } else {
//         itemlist[i].style.backgroundColor = 'green'
//     }
// }

//-----------------Nextsibling----------------//

// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);

//----------------PreviousSibling-------------//

// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);

//-------------CreateElement--------------//

// //Create a div
// var newDiv = document.createElement('div');

// //Add class
// newDiv.className = 'Hello'

// //Add id 
// newDiv.id = 'Hello 1'

// //Add attribute
// newDiv.setAttribute('title', 'Hello div');

// //Create text node
// var newDivText = document.createTextNode('Traversy Media');

// //Add text to div
// newDiv.appendChild(newDivText);

// //Insert div
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';
// newDiv.style.color = 'black';


//---------------------part-3-----------------//

// function buttonClick(e) {
//     //console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'changed';
//     // document.querySelector('#main').style.backgroundColor = 'coral';
//     // var item = document.querySelectorAll('.list-group-item');
//     // for (var i = 0; i < item.length; i++) {
//     //     item[i].style.backgroundColor = 'lightgreen';
//     // }

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     // console.log(e.type);

//     //console.log(e.clientX);
//     //console.log(e.clientY);
//     //console.log(e.offsetX);
//     //console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);

// }

// var button = document.getElementById('button').addEventListener('click', buttonClick);


function runEvent(e) {
    console.log('Event Type:' + e.type);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3> MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

    // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

    // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

    //console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';

    e.preventDefault();

}
var button = document.getElementById('button');
var box = document.getElementById('box');
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

//box.addEventListener('click', runEvent);
//box.addEventListener('dblclick', runEvent);
//box.addEventListener('mousedown', runEvent);
//box.addEventListener('mouseup', runEvent);
//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mousemove', runEvent);

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);
//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);