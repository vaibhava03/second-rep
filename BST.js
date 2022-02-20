class Node
{
constructor(data,left=null, right=null)
{
    this.data=data;
    this.left=left;
    this.right=right;
}
}
class BinarySearchTree
{
    constructor()
    {
        this.root=null;
    }
    insert(data)
    {
 
        const node=this.root;
      console.log(node);
        if(node===null)
        {
            this.root=new Node(data); 
            return;
        }
        else 
        {
            const searchTree=(node) =>
            {
            if(data<node.data)
            {
               if(node.left===null){
               node.left=new Node(data);
               return;
               }
           
                else if(node.left!==null)
                {
               return searchTree(node.left);
                }  
            }  
            else if(data>node.data)
            { 
               if(node.right===null){
               node.right=new Node(data);
               return;
               }
           
           else if(node.right!==null)
           {
               return searchTree(node.right);
           }  

           } 
           else return null;
            };
            
            return searchTree(node);
        }
    }
Search(data)
{
    let curr=this.root;
    while(curr.data!==data)
    {
        if(data<curr.data)
        {
            curr=curr.left;
        }
        else
        curr=curr.right;
        if(curr===null)
        return null;

    }
    return curr;
}
    
    preOrderRecursion()
    {
    
    if (this.root===null) {
        return null;
    }
    else{
      var arr=new Array();
      function tranversePreOrder(node)
      {
        arr.push(node.data);
        node.left&&tranversePreOrder(node.left);
        node.right&&tranversePreOrder(node.right);
      };
    tranversePreOrder(this.root);
   return arr
}
 }

 preOrderIteration()
 {
    let node=this.root;
    var arr1=new Array();
     if(node!==null)
     {
         arr1.push(node);
     }
     else {
         var arr=new Array();
         while(arr.length>0)
         {
            arr.push(node.data);
           if(node.right!=null)
           { 
               arr1.push(node.right);
            node=node.left;
           }
           if(node.left!=null)
           { 
               arr1.push(node.left);
            node=node.left;
           }
           
         }
     } return arr;
 }
}
var Tree=new BinarySearchTree;

Tree.insert(8); 
Tree.insert(4);
Tree.insert(3);
Tree.insert(7);
Tree.insert(9);
console.log(Tree.Search(3));
console.log(Tree);
console.log(Tree.preOrderRecursion());
console.log(Tree.preOrderIteration());
