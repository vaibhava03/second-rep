/*console.log(document.domain);
console.log(document.URL);
console.log(document);
console.log(document.title);
document.title=123;
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//console.log(document.getElementById('header-title'));
var headertitle=document.getElementById('header-title');
//headerTitle.textContent="Hello";
//headerTitle.textContent="Good Bye";
//headerTitle.innerHTML='<h3>Hello</h3>';
headerTitle.style.borderBottom='solid 3px #000';
var title=document.getElementsByClassName('Items');
title.style.fontweight='bold';
title.style.color='green';*/

/*var items=document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";*/
//items[1].style.fontweight='bold';
//items[1].style.backgroundColor='yellow';
//for(var i=0;i<items.length;i++)

//{
  //  items[1].style.backgroundColor='#f4f4f4';
//}
/*items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++)
{
    items[i].style.fontweight='bold';
    items[i].style.color='#f4f4f4';
}
var li=document.getElementsByClassName('items');
console.log(li);
var li=document.getElementsByTagName('li');
console.log(li);*/

/*var header =document.querySelector('#main-header');
hader.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value='Hello World';
var submit=document.querySelector('input[type='submit]');
submit.value='SEND';*/
//var item=document.querySelector('.list.group.item');
//item.style.color='red';

//var lastItem=document.querySelector('.list.group.item:last-child');
//lastItem.style.color='blue;

/*var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem=documeny.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';
var listGroupItems=document.querySelectorAll('.list-group-items');
console.log(listGroupItem);
listGroupItem[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
  odd[i].style.backgroundColor='green';
}*/
// TRAVERSING THE DOM //
var itemList=document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
//console.log(itemList.childNodes);
console.log(itemList.children);
itemList.lastElementChild.style.backgroundColor='green';
itemList.lastChild.textContent='this is last child';
itemList.firstElementChild.style.backgroundColor='yellow';
itemList.firstChild.textContent='hello';
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);


