/*console.log(document.domain);
console.log(document.URL);
console.log(document);*/
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
title.style.color='green';

