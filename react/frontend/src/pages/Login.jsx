import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Home from './Home.jsx'
import Signup from './Signup.jsx'
function Login() {
    const navigate = useNavigate()
    const handleLogin = async(e) =>{
e.preventDefault()
const form = e.target
    const username = form.username.value.trim()
    const password = form.password.value.trim()
   

if (!username || !password ){
    alert ("Fill all  fields");
}
 
else {
try {
  const response = await axios.post('http://localhost:8080/api/users/login', {
    username , password}
    , {withCredentials: true}
  )
   
    if (response.status === 200) {
      alert("Login successful!")
      localStorage.setItem('username', username)
navigate('/home')

    
    } else {
      alert("Login. Try again.")
    }
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data)}
    else{
    alert("Error occurred during Login")
  }
  console.error(error)
}}}
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit = {handleLogin}>
        Username <input type = "text" name =  "username"/>
        <br/><br/>
        Password <input type = "password" name =  "password"/>
         <br/><br/>
      
           <button type  =  "submit">Submit</button>
        </form>
        <br/>
        Dont have an account ?
        
     <Link to = "/Signup">Signup</Link>
    
      </div>
    )

  }
  
  export default Login