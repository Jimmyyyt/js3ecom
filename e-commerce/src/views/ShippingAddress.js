import React from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingAddress = () => {

  // const [fullName, setFullName] = useState('');
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" >
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          {/* <input type="text" id="fullName" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required /> */}
        </div>
      </form>
    </div>
  )
}

export default ShippingAddress
