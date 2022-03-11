import React from 'react'
import {Link} from 'react-router-dom'

function Checkout({checkoutProduct}) {

  return (
    <div>
      
      <h1>Checkout</h1>
      {checkoutProduct.length === 0
      ? <div><p>Your cart is empty, have a look at what is in stock</p>
      <Link to="/products">
        <button>Cars in stock</button>
      </Link>
      </div>

      
      : 
      <div>
          <table>
          <tbody>
            <tr>
              <td><p>Car model</p></td>
              <td><p>Price</p></td>
              <td><p>Picture</p></td>
            </tr>
          </tbody>
        </table>
          {
            checkoutProduct.map (car => (
              <div key={car.id}>
                <table>
                  <tbody>
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
      }
      
      
    </div>
  )
}

export default Checkout