import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import { toast } from "react-toastify"
import api from "../services/api"
import {ModalConatainer} from "./styles"

const ModalAddTech = ({users, setUsers, setOpenModalAdd}) => {
    
  const schema = yup.object().shape({
    title: yup.string().required("Informe a tecnologia"),
    status: yup.string()
  })

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm ({resolver: yupResolver(schema)})

  const handleClose = () => {
    setOpenModalAdd(false);
  }

  
  const addTech = (data) => {
    const token = localStorage.getItem("token")  
    
    api.post("/users/techs", data, {headers: {Authorization: `Bearer ${token}`}})     
    .then((res) => {
      const newList = [...users.techs, res.data]
      setUsers({...users, techs: newList})
      
      toast.success("Tecnologia adicionada com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      setOpenModalAdd(false)
    })
    .catch(() => {
      toast.error("Tecnologia já cadastrada", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setOpenModalAdd(false)
    })  
  }


  return (
   
    <ModalConatainer>
      <div className="modalAddTechs">
        <div className="containerHeadModal">
          <h2 className="title">Cadastrar Tecnologia</h2>
          <button className="btnClosed" onClick={handleClose}>X</button>
        </div>
      
        <form className="formModal" onSubmit={handleSubmit(addTech)}>
          <label className="labelInput">Nome</label>
          <input className="inputModal"
            placeholder="Digite a tecnologia"
            type="text"
            {...register("title")}
          />
          <span className="failed">{errors.title?.message}</span>

          <label className="labelInput">Selecionar status</label>
          <select className="selectModal" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button className="btnAdd" type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>      
    </ModalConatainer>    
    
  )
}

export default ModalAddTech





