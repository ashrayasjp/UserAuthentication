import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Home from './Home.jsx'
function Signup() {
    const navigate = useNavigate()
    const handleSignup = async(e) =>{
e.preventDefault()
const form = e.target
    const username = form.username.value.trim()
    const password = form.password.value.trim()
    const confirmpassword = form.confirmpassword.value.trim()

if (!username || !password || !confirmpassword){
    alert ("Fill all  fields");
}
 else if (password.length< 6){
    alert("Password must be at least 6 characters");

}
else if (password!==confirmpassword){
    alert("Passwords do not match");

}
else {
try {
  const response = await axios.post('http://localhost:8080/api/users/signup', {
    username , password})
   
    if (response.status === 200) {
      alert("Signup successful!")
      navigate('/home')
      
    } else {
      alert("Signup failed. Try again.")
    }
  } catch (error) {
    if (error.response && error.response.data) {
      alert(error.response.data)}
    else{
    alert("Error occurred during signup")
  }
  console.error(error)
}}}
    return (
      <div>
        <h1>Signup Page</h1>
        <form onSubmit = {handleSignup}>
        Username <input type = "text" name =  "username"/>
        <br/><br/>
        Password <input type = "password" name =  "password"/>
         <br/><br/>
        Confirm Password <input type = "password" name = "confirmpassword" />
         <br/><br/>
           <button type  =  "submit">Submit</button>
        </form>
    
      </div>
    )


 
  }
  
  export default Signup
  