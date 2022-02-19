console.log('person1: shows ticket');
    console.log('person2:shows ticket');

    const promiseWifeBringsTicks=new Promise((resolve, reject) =>{
        setTimeout(() => {
        resolve('ticket');
        },3000);
        }); 
    promiseWifeBringsTicks.then((t) => {
    console.log(`person3:shows ${t}`);
    });
    const getPopcorn=promiseWifeBringsTicks.then((t) => {
       console.log('wife:here is the ticket');
        console.log('husband: we need to go');
        console.log('wife:no iam hungry');
        return new Promise((resolve, reject) =>
        resolve(`${t} popcorn`));
    });

    // getPopcorn.then((t) => console.log(t));
    const getButter=getPopcorn.then((t) => {
        console.log('husband; we need to go');
        console.log('wife: I need butter on my popcorn');
        return new Promise((resolve, reject) =>
        {
            resolve(`${t} butter`);
        });
    });

        // getButter.then((t) => console.log(t));

        const getColdDrinks=getButter.then((t) => {
            console.log('husband: I got the butter');
            console.log('wife: I need Cold Drinks');
            return new Promise((resolve, reject) =>
            {
                resolve(`${t} cold drink`);
            });
        });

        getColdDrinks.then((t) => console.log(t));
    console.log('person4: shows ticket');
    console.log('person5: shows ticket');
