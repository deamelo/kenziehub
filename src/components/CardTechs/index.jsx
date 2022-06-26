import {CardContainer} from "./styles"
import ModalEditDel from "../ModalEditDel/index"
import {useState} from "react"

const CardTechs = ({users, setUsers}) => {
  
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [techId, setTechId] = useState("")
  const [techTitle, setTechTitle] = useState("")


  const handleClickOpenModalEdit = (id) => {
    const currentTech = users.techs.find((tech) => tech.id === id) 
      
    setTechId(currentTech.id)
    setTechTitle(currentTech.title)

    setOpenModalEdit(true)
  }

    
  return (
    
    <CardContainer >
    {
      users.techs && users.techs.map((user) => {    
            
      return(      
        <>
          <button className="btnCardAdd"key={user.id} onClick={() => handleClickOpenModalEdit(user.id)}> 
          <h2 className="titleCard" >{user.title}</h2>
          <h3 className="course" >{user.status}</h3>
          </button>
        </>
      )})     
    }

    {
      openModalEdit && <ModalEditDel 
      users={users} 
      setUsers={setUsers} 
      setOpenModalEdit={setOpenModalEdit}
      techId={techId} 
      techTitle={techTitle}
      /> 
    }
    </CardContainer>       
  )
}

export default CardTechs