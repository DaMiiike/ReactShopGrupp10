import React from 'react'


function Checkout({setCheckoutProduct, checkoutProduct}) {


  
  return (
    <div>
      {
        checkoutProduct.map(testProduct => {
          console.log(testProduct)
          if(setCheckoutProduct.cart === true) {
            return (
            
              <div>
                <h3>{testProduct.title} - </h3>
                <button>Buy</button>
              </div>
            )
          } else { return console.log("funkar ej nåntng")}

 
      })
      }
    </div>
  )
}

export default Checkout