import {Container} from "./styles"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {useHistory} from "react-router-dom"
import api from "../services/api"
import { toast } from "react-toastify"



const Register = ({setUsers}) => {

  const history = useHistory()  

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório").min(6, "Mínimo de seis caracteres"),
    bio: yup.string().required("Bio obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string()
  })

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})


  const onSubmitForm = (data) => {
    api.post("/users/", data)
    .then((res) => {
      setUsers(res.data)
      toast.success("Cadastro efetuado com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        history.push("/")
    })
    .catch(() => {
      toast.error("Falha no cadastro", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    })  
  }
  

  return (
    <>
      <Container>        
          <header className="headerContainer">
            <div className="headerDiv">
              <h1 className="logo">Kenzie Hub</h1>
              <button className="btnRegister"onClick={() => history.push("/")}>Voltar</button>
            </div>        
          </header>

          <div className="containerForm">          
            <h2 className="tittleRegister">Crie seu cadastro</h2>
            <h3 className="subTittleRegister">Rápido e grátis, vamos nessa?</h3>

            <form className="formRegister"onSubmit={handleSubmit(onSubmitForm)}>
              <label className="label">Nome</label>
              <input className="inputRegister"
              type="text" 
              placeholder="Digite aqui seu nome"
              {...register("name")}          
              />
              <span className="ErrorRegister">{errors.name?.message}</span>

              <label className="label">Email</label>
              <input  className="inputRegister"
              placeholder="Digite aqui seu email"
              type="email"
              {...register("email")}
              />
              <span className="errorRegister">{errors.email?.message}</span>
              
              <label className="label">Senha</label>
              <input className="inputRegister"
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("password")}
              />
              <span className="errorRegister">{errors.password?.message}</span>
              
              <label className="label">Bio</label>
              <input className="inputRegister"
              placeholder="Digite sua bio"
              type="text"
              {...register("bio")}
              />
              <span className="errorRegister">{errors.bio?.message}</span>

              <label className="label">Contato</label>
              <input className="inputRegister" 
              placeholder="Digite seu contato"
              type="text"
              {...register("contact")}
              />
              <span className="errorRegister">{errors.contact?.message}</span>
              
              <label className="label">Selecionar Módulo</label>
              <select className="select" {...register("course_module")}>
                <option className="option" type="modulo1" >Primeiro módulo (Introdução ao Frontend)</option>
                <option className="option" type="modulo2" >Segundo módulo (Frontend Avançado)</option>
                <option className="option" type="modulo3" >Terceiro módulo (Introdução ao Backend)</option>
                <option className="option"type="modulo4" >Quarto módulo (Backend Avançado)</option>
              </select>       
              
              <button className="btnBig" type="submit">Cadastrar</button>
            </form>          
        </div>
      </Container>    
    </>
  )
}

export default Register