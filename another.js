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

var items=document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
//items[1].style.fontweight='bold';
//items[1].style.backgroundColor='yellow';
//for(var i=0;i<items.length;i++)

//{
  //  items[1].style.backgroundColor='#f4f4f4';
//}
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontweight='bold';
    items[i].style.color='#f4f4f4';
}
var li=document.getElementsByClassName('items');
console.log(li);
var li=document.getElementsByTagName('li');
console.log(li);
