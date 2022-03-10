import React from 'react'

function Checkout({checkoutProduct}) {


  return (
    <div>
      
      <h1>Checkout</h1>
        {
          checkoutProduct.map (car => (
            <div key={car.id}>
              <table>
                <tbody>
                <tr>
                    <td><p>Car model</p></td>
                    <td><p>Price</p></td>
                    <td><p>Picture</p></td>
                  </tr>
                  <tr>
                    <td><p>{car.title}</p></td>
                    <td><p>{car.price} €</p></td>
                    <td><img src={car.url} alt='Your soon to be car' /></td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          ))
    
        }
      <h2>Total cost:</h2>
    </div>
  )
}

export default Checkout