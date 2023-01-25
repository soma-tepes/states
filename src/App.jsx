import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Contador from './components/Contador'


const a = [
  'one','two','three','four','one','two','three','four',
  'one','two','three','four','one','two','three','four',
  'one','two','three','four','one','two','three','four'

] /*7*/ 
function App() {
  
  const [count, setCount] = useState(0)
  

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 5000);
  });
  

  const [user, setUser] = useState()

  const getRandomUser = () => {
    axios.get("https://randomuser.me/api/")
      .then(res => setUser(res.data.results[0]))
      .catch(err => setUser(err))
  }

  useEffect(() => {
    getRandomUser()
  }, [])
  
  return (
    <div className="App">
     
   <Contador cont={count} setC ={setCount} a={a}/>
   {
        user ? <h1>{user.name.title} {user.name.first} {user.name.last}</h1> : <h1>Cargando...</h1>
      
    }
       <ul>
       <li>{user?.gender}</li>
       <li>{user?.location.city}</li>
       <li>{user?.email}</li>
       <li>{user?.login.username}</li>
       </ul>
       <img src={user?.picture.large} alt="" />
    </div>
  )
}

export default App
