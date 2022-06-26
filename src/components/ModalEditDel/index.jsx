import {ModalConatainerEdit} from "./styles"
import api from "../services/api"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import {toast} from "react-toastify"

const ModalEditDel = ({users, setUsers, setOpenModalEdit, techId, techTitle}) => { 
  
  const schema = yup.object().shape({
    status: yup.string().required("Faça o update")
  })

  const {
    register,
    handleSubmit,     
  } = useForm({resolver: yupResolver(schema)})


  const editTech = (data) => {
    const token = localStorage.getItem("token") 
    api.put(`/users/techs/${techId}`, data, {headers: {Authorization: `Bearer ${token}`}})     
    .then((res) => {
      const newList = users.techs && users.techs.map((tech) => {
        if(tech.id === res.data.id){
          return res.data
          
        } else {
          return tech
        }
      })
      setUsers({...users, techs: newList})
      toast.success("Tecnologia editada com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      setOpenModalEdit(false)
    })
  }


  const deleteTech = (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")    
    
    api.delete(`/users/techs/${techId}`, {headers: {Authorization: `Bearer ${token}`}})     
    .then((res) => {
      toast.success("Tecnologia excluída com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })      
      const newListTechs = users.techs.filter((tech) => tech.id !== res.id)
      setUsers({...users, techs: newListTechs})
      setOpenModalEdit(false)      
    })
  }


  const handleCloseModalEdit = () => {
    setOpenModalEdit(false)
  }


  return (
  <>
    <ModalConatainerEdit>
      <div className="modalEditTechs">
        <div className="containerHeadModalEdit">
          <h1 className="titleEdit">Tecnologia Detalhes</h1>
          <button className="btnClosedEdit"onClick={handleCloseModalEdit}>X</button>
        </div>
      
        <form className="formModalEdit" onSubmit={handleSubmit(editTech)}>

          <label className="labelInputEdit">Nome do projeto</label>          
            <h2 className="titleTech">{techTitle}</h2>         
          <label className="labelInputEdit">Status</label>

          <select className="selectModalEdit"{...register("status")}> 
            <option >Iniciante</option>
            <option >Intermediário</option>
            <option >Avançado</option>
          </select>

          <div className="containerBtn">
            <button className="btnEditTech" type="submit">Salvar Aterações</button>    
            <button className="btnDelTech"onClick={deleteTech}>Excluir</button>    
          </div>
          
        </form>       
      </div>
    </ModalConatainerEdit>    
  </>
  )
}

export default ModalEditDel