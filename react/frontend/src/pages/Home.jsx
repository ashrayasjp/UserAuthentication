import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (!storedUsername) {
      navigate('/login', { replace: true })
    } else {
      setUsername(storedUsername)
    }
  }, [navigate])

  const handleLogout = async () => {
    try {
   
      await axios.post('http://localhost:8080/api/users/logout', {}, {
        withCredentials: true,
      })
    
      localStorage.removeItem('username')
 alert("Successfully Logged  out")
      navigate('/login', { replace: true })
    } catch (error) {
      alert('Logout failed. Please try again.')
      console.error(error)
    }
  }

  if (!username) {
    
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
