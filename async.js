
    console.log('person1: shows ticket');
    console.log('person2:shows ticket');

    const preMovie=async() =>{
        const promiseWifeBringsTicks=new Promise((resolve, reject) =>
        { 
            setTimeout(() =>  resolve('ticket'), 3000);
        });

        const getPopcorn=new Promise((resolve, reject) =>  resolve(`popcorn`));
        const getButter=new Promise((resolve, reject) =>  resolve(`butter`));
        const getColdDrinks=new Promise((resolve, reject) =>  resolve(`cold drink`));

        let ticket=await promiseWifeBringsTicks;

        console.log('wife:here is the ticket');
        console.log('husband: we need to go');
        console.log('wife:no iam hungry');

        let popcorn=await getPopcorn;

        console.log('husband: I got popcorn. we need to go');
        console.log('wife: I need butter on my popcorn');

        let butter=await getButter;

        console.log(`husband: i got ${butter} on popcorn`);
        console.log(`husband: anything else?`);
        console.log(`wife: we are getting late, lets go`);

        let coldDrinks= await getColdDrinks;

        console.log('husband: I got the butter');
        console.log('wife: I need Cold Drinks')
       
          
            return ticket;
    } 
  
        preMovie().then((m) => console.log(`person3: shows ${m}`));

        console.log('person4: shows ticket');
        console.log('person5: shows ticket');
