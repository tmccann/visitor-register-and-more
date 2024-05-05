import React from 'react'

const NewCustomer = () => {
  return (
    <form className='addCompanyDetails'>
    <label htmlFor='companyName'>Company Name</label>
    <input
        autoFocus
        id='companyName'
        type='text'
        placeholder='Please input company name'
        required
    />
     <label htmlFor='Address'>Company Name</label>
    <input
        autoFocus
        id='Address'
        type='text'
        placeholder='Please input address'
        required
    />
       <input
        autoFocus
        id='Phone Number'
        type='text'
        placeholder='Please input phone number'
        required
    />
       <input
        autoFocus
        id='PrimaryContact'
        type='text'
        placeholder='primary contact'
        required
    />





    <button
        type='submit'
        aria-label='CompanyDetails'
    >
       
    </button>
</form>
  )
}

export default NewCustomer