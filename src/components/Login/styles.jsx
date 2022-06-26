import styled from "styled-components"

export const ContainerLogin = styled.section`
  width: 38vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 375px){
    width: 95vw;
  }

  @media (min-width: 376px) and (max-width: 425px){
    width: 85vw;
  }

  @media (min-width: 426px) and (max-width: 768px){
    width: 65vw;
  }

  .headerContainer {
    height: 60px;
    width: 100%;
    text-align: center
  }

  .logo {
    color: #FF577F;
    font-size: 30px; 
  }

  .formLogin {
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 30px 22px;  
  width: 80%;    
  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;  
  }

  .tittleLogin {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 0 auto;
    color: #F8F9FA;
  }

  .label {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #F8F9FA;
  }

  .input {
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    position: static;
    left: 0%;
    right: 0%;
    top: 27.27%;
    bottom: 27.27%;
    background-color: #343B41;
    border: 1.2182px solid #343B41;
    box-sizing: border-box;
    border-radius: 4px;

    @media (max-width: 320px) {
      height: 48px;    
    }
  }

  .errorLogin {
    color: red;
    font-size: 15px;
  }

  .btnLogin,
  .btnCadastro {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    position: static;
    width: 100%;
    height: 48px;
    left: 22px;
    top: 621px;
    cursor: pointer;
    background-color: #FF577F;
    border: 1.2182px solid #FF577F;
    box-sizing: border-box;
    border-radius: 4px;
    flex: none;
    order: 7;
    flex-grow: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
  }

  .containerBtn {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    gap: 0.5em;
    width: 100%;
  }

  .conatinerCadastro{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .conta {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    margin: 0 auto;
    color: #868E96;
  }

  .btnCadastro {
    background-color: #868E96;
    border: 1.2182px solid #868E96;
  }
`



