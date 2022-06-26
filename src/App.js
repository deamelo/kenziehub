// import Header from './components/Header';

import Register from '../src/components/Register'
import Login from '../src/components/Login'
import Home from '../src/components/Home'
import api from './components/services/api'
import {useState, useEffect} from "react"
import { Switch, Route } from 'react-router-dom'
import {useHistory} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import './App.css'


function App() {

  const history = useHistory()

  const [users, setUsers] = useState(null)
  const [auth, setAuth] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    if(id && token) {
      api.get(`users/${id}`)
      .then(res => {
        setUsers(res.data)
        setAuth(true)
        history.push("/home")
      })
      .catch(() => {
        history.push("/")
      })
    }    
  }, [history])

  return (
    <>   
      <Switch>
        <Route exact path="/">
          <Login 
            setUsers={setUsers}
            setAuth={setAuth}  
            />
        </Route>

        <Route path="/register">
          <Register 
            setUsers={setUsers}
          />
        </Route>        

        <Route path="/home/:name?">
          <Home 
            users={users}
            setUsers={setUsers}
            auth={auth}  
            setAuth={setAuth}    
          />
        </Route>
      </Switch>

      <ToastContainer/>
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      <ToastContainer />
    </>
  );
}

export default App;
