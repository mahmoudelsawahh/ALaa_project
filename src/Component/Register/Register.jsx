import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import { Link } from 'react-router-dom'
export default function Register() {
    let [user, setUser] = useState({
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        password: "",
      })
     
      let navigate = useNavigate()
      let [errorApi, setErrorApi] = useState("")
      let [errorList, setErrorList] = useState([])
      let [loading, setloading] = useState(false)
    
      function addUser(e) {
        let userData = { ...user };
        userData[e.target.name] = e.target.value;
        setUser(userData);
      }
    
      async function submitForm(e) {
        e.preventDefault()
        let valid = ValidData()
        console.log(valid);
        if (valid.error == null) {
          setloading(true)
          console.log(user);
          let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', user)
          console.log(data);
    
          setloading(false)
          if (data.message == 'success') {
            // login
            navigate('/login')
          }
          else {
            // error
            setErrorApi(data.message)
          }
        } else {
          // error valid
          setErrorList(valid.error.details)
        }
    
      }
    
      function ValidData() {


        let schama = Joi.object({
          first_name: Joi.string().required().min(3).max(20).alphanum(),
          last_name: Joi.string().required().min(3).max(20).alphanum(),
          age: Joi.number().min(16).max(80).required(),
          email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
          password: Joi.string().pattern(new RegExp(/^[A-Z][a-z]{2,10}[0-9]?$/))
        })
    
        return schama.validate(user, { abortEarly: false })
      }
    return (
        <>
              <div className="container p-lg-5">
            <div className="register card o-hidden border-0 bg-transparent ">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block register-image"></div>
                        <div className="col-lg-6 register-text">
                            <div  className="p-5">
                                <div  className="text-center">
                                        <h4 className=" text-gray-900 mb-4">Create My Account! </h4></div>

                                        {errorApi == '' ? '' : <div className='alert alert-danger '>{errorApi}</div>}


      {errorList.length > 0 ? errorList.map((el) => <div className='text-danger'>{el.path[0] == 'password' ? 'enter vaild pass' : el.message}</div>) : ""}
      <form onSubmit={submitForm}   >
                                          <div className='row'>
                                                <div className='my-3 col-md-6'>
    
    <input onChange={addUser} type="text" id='First Name' name='first_name' placeholder='First Name' className='form-control bg-transparent text-white mt-1' />
    </div>
    <div className='my-3 col-md-6'>
    
    <input onChange={addUser} type="text" id='Last Name' name='last_name' placeholder='Last Name'  className='form-control bg-transparent text-white mt-1' />
    </div>
    </div>
    <div className=''>
    
    <input onChange={addUser} type="number" id='age' name='age' placeholder='Age' className='form-control bg-transparent text-white mt-1' />
    </div>
    <div className='my-3'>
    
    <input onChange={addUser} type="email" id='email' name='email' placeholder='Email Address' className='form-control bg-transparent text-white mt-1' />
    </div>
    <div className='my-3'>
    
    <input onChange={addUser} type="password" id='password' placeholder='Password' name='password' className='form-control bg-transparent text-white mt-1' />
    </div>
    {loading ? <button type='button' className='btn btn-outline-info ' placeholder='Create Account'>
    <i className='fa-solid fa-spinner fa-spin'></i>
    </button> : <button to="/login" type='submit' className='login-btn btn-primary text-white w-100 p-2'>Create Account</button>}
   <div className="text-muted small">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"  className="text-secondary">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-secondary">Terms of Service</a> apply.</div>
    <hr></hr>
    <div  className="text-center">
      <span className="">Already a member?</span>
      <Link  className="login-member cursor ms-2" to="/login">Log In
      <i className="fa fa-chevron-right "></i></Link>
      </div>
      {loading ? <button type='button' className='btn btn-outline-info'>
          <i className='fa-solid fa-spinner fa-spin'></i>
        </button> : <button type='submit' className='btn btn-outline-info'>Register</button>}
    </form>
     </div>
   </div>
  </div>
  </div>
</div>
  </div>
        </>
      )
}

