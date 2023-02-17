import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
export default function Login({saveUser}) {
    let [user, setUser] = useState({
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
          let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', user)
          console.log(data);
    
          setloading(false)
          if (data.message == 'success') {
            // login
            navigate('/home')
            localStorage.setItem("token", data.token)
            
            saveUser()
    
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
          email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
          password: Joi.string().pattern(new RegExp(/^[A-Z][a-z]{2,10}[0-9]?$/))
        })
    
        return schama.validate(user, { abortEarly: false })
      }
    return (
        <>
    
    
          {errorApi == '' ? '' : <div className='alert alert-danger '>{errorApi}</div>}
    
    
          {errorList.length > 0 ? errorList.map((el) => <div className='text-danger'>{el.path[0] == 'password' ? 'enter vaild pass' : el.message}</div>) : ""}
          <div className="container p-lg-5">
            <div className="register card o-hidden border-0 bg-transparent ">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block register-image"></div>
                        <div className="col-lg-6 register-text">
                            <div  className="p-5">
                                <div  className="text-center">
                                    <img src={logo} className="login-img" />
                                        <h4 className=" text-gray-900 ">Log in to GameOver </h4></div>
                                        <form onSubmit={submitForm} >
                                          <div className='row'>
                                                <div className='my-1 col-md-6'>
    
    </div>
 
    <div className=''>
    
    <input onChange={addUser} type="email" id='email' name='email' placeholder='Email Address' className='form-control bg-transparent text-white mt-1' />
    </div>
    <div className='my-3'>
    
    <input onChange={addUser} type="password" id='password' placeholder='Password' name='password' className='form-control bg-transparent text-white mt-1' />
    </div>
    {loading ? <button type='button' className='btn btn-outline-info ' placeholder='Create Account'>
    <i className='fa-solid fa-spinner fa-spin'></i>
    </button> : <button to="/home" type='submit' className='login-btn2 text-white mx-3 mb-3 p-2'>Login</button>}

    <hr></hr>
    <div  className="text-center">
        <a   onclick="(()=>{alert('ههه اعمل اكونت جديد')})()" className="small a2 cursor">Forgot Password?</a></div>
    <div  className="text-center">
      <span className="">Not a member yet?</span>
      <Link  className="login-member cursor ms-2" to="/register">Create Account
      <i className="fa fa-chevron-right "></i></Link>
      {loading ? <button type='button' className='btn btn-outline-info'>
          <i className='fa-solid fa-spinner fa-spin'></i>
        </button> : <button type='submit' className='btn btn-outline-info'>Login</button>}
      </div>
    </div>
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

