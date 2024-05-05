import { NavLink, Outlet } from 'react-router-dom'
import '../pages/styles/customer.css'

const Customer = () => {
  return (
    <div>
      <nav  className='btn-container'>
      <NavLink className="red" to="new-customer"><button>Add new customer</button></NavLink> 
      <NavLink to="existing-customer"><button>Edit existing customer</button> </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Customer