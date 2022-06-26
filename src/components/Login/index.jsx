// import axios from "axios"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useHistory} from "react-router-dom"
import {ContainerLogin} from "./styles"
import api from "../services/api"
import { toast } from "react-toastify"

const Login = ({setUsers, setAuth}) => {

  const history = useHistory()

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha de seis dígitos obrigatória")
  })

  const {
    register,
    handleSubmit,
    formState: {errors},
    } = useForm({resolver: yupResolver(schema)})

  
    const onSubmitForm = (data) => {
      
      api.post("/sessions/", data)
      .then((res) => {
        const {token} = res.data
        const {id} = res.data.user
        
        setUsers(res.data.user)
        setAuth(true)

        localStorage.setItem("token", token)
        localStorage.setItem("id", id)
        
        history.push(`/home/${res.data.user.name}`)   
        
        toast.success("Login efetuado com sucesso", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      })
      .catch(() => {
        toast.error("Verifique sua senha de seis dígitos", {
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
    <ContainerLogin>
      <header className="headerContainer">       
          <h1 className="logo">Kenzie Hub</h1>        
      </header>      
           
      <form className="formLogin"onSubmit={handleSubmit(onSubmitForm)}>
        <h2 className="tittleLogin">Login</h2>
        <label className="label">Email</label>
        <input className="input"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span className="errorLogin">{errors.email?.message}</span>

        <label className="label">Senha</label>
        <input className="input"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <span className="errorLogin">{errors.password?.message}</span>
        <div className="containerBtn">
          <button className="btnLogin" type="submit">Entrar</button>
          <div className="conatinerCadastro">
            <span className="conta">Ainda não possui uma conta?</span>
            <button className="btnCadastro"onClick={() => history.push("/register")}>Cadastre-se</button>        
          </div>
        </div>
      </form>      
    </ContainerLogin>
  )
}

export default Login



