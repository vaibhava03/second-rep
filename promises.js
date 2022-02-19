const posts=[
     { title:'Post One' , body:'This is post one'},
     { title:'Post Two' , body:'This is post Two'}
     ];   
     
   

     const postAsync=async(post) =>{

         const createPost=new Promise((resolve, reject) =>
         {
             
             setTimeout(() =>resolve( posts.push(post)), 1000);
         });
         const getPosts=new Promise((resolve, reject) =>
         resolve(
         setTimeout(() => {
         
            let output='';
            posts.forEach((post, index) =>
            {
                output+=`<li> ${post.title}</li>`;
            });
            document.body.innerHTML=output;
        },1000)));
        const DeletePost=new Promise((resolve, reject) =>
        resolve(
         setTimeout(() => {
         posts.pop();
        },2000)));
      let createP=await createPost;
      let getP=await getPosts;
      let deleteP=DeletePost;
      return posts;
     }
     postAsync().then((m) => console.log(m));

   
