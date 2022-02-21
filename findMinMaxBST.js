 class Node
  {
    constructor(data,left=null,right=null)
    {
      this.data=data;
      this.left=left;
      this.right=right;
    }
  }

  class BST
  {
    constructor()
    {
      this.root=null;
    }
        
    insert(data)
    {
      const node=this.root;

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
              if(node.left===null)
              {
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
              if(node.right===null)
              {
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

    findMinMax()
    {
      var nodeL=this.root;
      var nodeR=this.root;
      while(nodeL.left!=null)
      {
        nodeL=nodeL.left;
      }
      while(nodeR.right!=null)
      {
        nodeR=nodeR.right;
      }
      return [nodeL.data,nodeR.data];
    }
  }

var Tree=new BST;

Tree.insert(15); 
Tree.insert(10);
Tree.insert(8);
Tree.insert(12);
Tree.insert(20);
Tree.insert(17);
Tree.insert(25);
console.log(Tree.findMinMax());
