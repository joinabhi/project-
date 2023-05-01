console.log('person1:show ticket');
console.log('person2:show ticket');
const preMovie=async()=>{
    const promiseWifeBringingTicks=new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    })
    const getpopcorn=new Promise((resolve, reject)=>resolve('popcorn'));
    const addbutter=new Promise((resolve, reject)=>resolve('butter'));
    const getColdDrinks=new Promise((resolve, reject)=>resolve('colddrinks'));

    let ticket=await promiseWifeBringingTicks
    console.log('wife: I have the ${ticket}')
    console.log('husband: we should go in')
    console.log('wife; No, i am hungry')

    let popcorn=await getpopcorn;
    console.log('husband: i got some ${popcorn}');
    console.log('husband: we should go in')
    console.log('wife; I need butter on mypopcorn')

    let butter=await addbutter;
    console.log('husband: i got some ${butter}');
    console.log('husband: anything else darling?')
    console.log('wife; I want mycolddrink')

    let colddrink=await getColdDrinks;
    console.log('husband: i got some ${colddrink}');
    console.log('husband: anything else darling?')
    console.log('wife; lets go we are getting late') 
    console.log('husband; thanks for reminding me')
    
    return ticket;
}

preMovie().then((m)=>console.log('person3:shows ${m}'))
