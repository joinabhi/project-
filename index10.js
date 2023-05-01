const cart=["shoes","pants","kurta"]

// console.log(promise)
createOrder(cart)
    .then(function(orderId){
    console.log(orderId);
    return orderId
       
    })
    .then(function(orderId){
  return proceedToPayment(orderId) 
    })
     .then(function(paymentInfo){
    console.log("paymentInfo")
    })
     .catch(function(err){
    console.log(err.message)
    })

function validateCart(cart){
    return false;
}
//creating promise
function createOrder(cart){
    const pr= new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err=new Error("cart is not valid")
        }
        const orderId="12345"
        if(orderId){
            setTimeout(function(){
                resolve(orderId)   
            }, 5000)
            
        }
    })
    return pr
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){ 
    resolve ("payment successful")
})
}

