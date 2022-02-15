var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e)
{
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  var newDes=document.getElementById('item1').value;
  var description=document.createElement('p');
  description.className='list-description';
  li.appendChild(document.createTextNode(newItem));
  description.appendChild(document.createTextNode(newDes));
  li.appendChild(description);
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  var editBtn=document.createElement('button');
  editBtn.className='editButton';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  
  itemList.appendChild(li);
}


function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are You Sure?'))
    {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
 
    var text = e.target.value.toLowerCase();
//     var items=itemList.getElementsByTagName('li');
//     Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//    if(itemName.toLowerCase().indexOf(text) != -1)
//     {
//     item.style.display='block';
//       } else {
//      item.style.display = 'none';
//       }
//     });
//}
    var itemDesc=itemList.getElementsByTagName('p');
    
    
    Array.from(itemDesc).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        
        //var itemL=document.getElementsByTagName('li')(indexOf(item));

        if(itemName.toLowerCase().indexOf(text)!= -1)
        {

            item.style.display='block';
          
        }
        else {  item.style.display='none'; 
         }
    });
   
  }
