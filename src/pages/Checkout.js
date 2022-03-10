import React from 'react'

function Checkout({checkoutProduct}) {
console.log(checkoutProduct)
console.log(checkoutProduct.id)


  return (
    <div>
      
      <h1>Checkout</h1>
      {/* <p>{checkoutProduct.id}</p> */}
      {
        checkoutProduct.map (car => (
          <div>
            <table>
              <tbody>
                <tr>
                  <td><p>{car.title}</p></td>
                  <td><p>{car.price}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
  
      }

    </div>
  )
}

export default Checkout