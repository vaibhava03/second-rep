const posts=[
     { title:'Post One' , body:'This is post one'},
     { title:'Post Two' , body:'This is post Two'}
     ];   
     function getPosts()
     {
         setTimeout(() => 
         {
            let output='';
            posts.forEach((post, index) =>
            {
                output+=`<li> ${post.title}</li>`;
            });
            document.body.innerHTML=output;
         },1000);
     }
     
     function createPost(post) {
     return new Promise((resolve, reject) =>
     {
         setTimeout(() => 
         {
         posts.push(post); 
         },1000);
         resolve();
     });
    
     }
     function deleteNow()
     {
        return new Promise((resolve, reject) => {
            setTimeout(()  =>{
                // while(posts.length!==0)
                // {
                posts.pop();
                //}
                console.log(posts);
                const error=false;
                if(!error)
                {
                    resolve();
                }
                else 
                {
                    reject('Array is empty');
                }
            },2000);
        });
    }
   function updateLastUserActivityTime()

     {
         return new Promise((resolve,reject) =>
         {
             setTimeout(() => {
               let updatedDate=new Date();
               
               resolve(updatedDate);
             }, 1000);
         })
     }
    function userupdatespost()
    {
        Promise.all([createPost, updateLastUserActivityTime])
        .then(([createPostresolves, updateLastUserActivityTimeresolves]) =>
        {
            console.log(posts, updateLastUserActivityTimeresolves());
    
        })
        .catch(err => console.log(err));
    }
      createPost( { title:'Post Three', body: 'This is post three'})
      .then(getPosts)
      .catch(err => console.log(err)); 
      
            // deleteNow()
            // .catch(err => console.log(err));
                
            updateLastUserActivityTime();
      userupdatespost();
       deleteNow()
            .catch(err => console.log(err));
                
 
// const promise1= Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve, reject) =>
// setTimeout(resolve,2000, 'GoodBye'));
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
