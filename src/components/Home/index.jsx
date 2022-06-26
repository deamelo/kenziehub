import {ContainerHome} from "./styles"
import { useHistory, Redirect} from "react-router-dom"
import {useState} from "react"
import CardTechs from "../CardTechs"
import ModalAddTech from "../ModalAddTech"


const Home = ({users, setUsers, auth, setAuth}) => {
  
  const [openModalAdd, setOpenModalAdd] = useState(false)
  
  const history = useHistory()

  const handleClickOpenModal = () => {
    setOpenModalAdd(true)
  }

    
  if(!auth) {
    return <Redirect to="/" />
  }

  
  const logout = () => {
    localStorage.clear()
    setAuth(false)
    history.push("/")
  }
  
  
  return (
    <>
      <ContainerHome>
        <header className="headerContainer">
          <div className="headerDivHome">
            <h1 className="logo">Kenzie Hub</h1>            
            <button onClick={logout}>Sair</button>            
          </div>        
        </header>       
          
        <div className="containerWelcome">
          <h2 className="welcome">Olá, {users.name}</h2>
          <h3 className="modulo">{users.course_module}</h3>
        </div>       
        
        <dev className="containerAdd">
          <h2 className="tecnologia">Tecnologia</h2>
          <button className="btnAdd" onClick={handleClickOpenModal}>+</button>         
        </dev>

        <CardTechs
          users={users} 
          setUsers={setUsers}
        ></CardTechs>
        
        {
          openModalAdd && <ModalAddTech 
            users={users} 
            setUsers={setUsers} 
            setOpenModalAdd={setOpenModalAdd} 
          ></ModalAddTech>            
        }
      </ContainerHome>     
    </>
  )
}

export default Home