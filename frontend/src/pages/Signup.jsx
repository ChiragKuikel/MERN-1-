import React from 'react'

function Signup() {
  return (
    <div className='border-emerald-100 border container mx-auto p-8 flex justify-between ' >
      <form>
          <div>
          <label for="name"> Name </label>
          <input type='text' name='name' className='bg-neutral-600 ' ></input>
          </div>
          <div>

          <label for="email" > Email </label>
          <input type='text' name='email' className='bg-neutral-600 '></input>
          </div>
          <div>
          <label for="password"> Password </label>
          <input type='password' name='password' className='bg-neutral-600 '></input>
          </div>
      </form>
    </div>
  )
}

export default Signup