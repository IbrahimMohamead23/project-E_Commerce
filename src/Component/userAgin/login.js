import React from 'react'
import { Button } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='login-form'>
        <form className=''>
        <label>
            user name
            <input type='text' placeholder='user Name'/>
        </label>

        <label>
            Email
            <input type='email' placeholder='@Email'/>
        </label>

        <label>
            password
            <input type='password' placeholder='password'/>
        </label>
      
        <label>
            Reset password
            <input type='password' placeholder='Reset password'/>

            </label>

        <label>
              <Button className='w-100'>Submit</Button>
            </label>


      
        </form>
    </div>
  )
}

export default Login