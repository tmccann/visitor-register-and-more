import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements

} from 'react-router-dom'


// pages
import Home from './pages/Home'
import Material from './pages/Material'
import Production from './pages/Production'
import Quality from './pages/Quality'

//customer pages
import Customer from './layouts/Customer'
import NewCustomer from './pages/customer/NewCustomer'

//layouts
import RootLayout from './layouts/RootLayout'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='customer' element={<Customer />} >
        <Route path='existing-customer' />
        <Route path='new-customer' element={<NewCustomer />} />
      </Route>
      <Route path='material' element={<Material />} />
      <Route path='production' element={<Production />} />
      <Route path='quality' element={<Quality />} />
    </Route>


  )
)

function App() {



  return (
    <RouterProvider router={router} />
  )
}

export default App
