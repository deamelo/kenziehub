import styled from "styled-components"

export const Container = styled.section`
  width: 40vw; 
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
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 40vw;
  }

  .headerContainer {
    height: 60px;
    width: 100%;
    margin: 0 auto;  

    @media (min-width: 320px) and (max-width: 768px){
      width: 92%;
    }

    @media (min-width: 769px) and (max-width: 1440px){
      width: 91%;
    }   
  }

  .headerDiv {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;  
    margin: 0 auto;
  }

  .logo {
    color: #FF577F;
    font-size: 30px;
  }

  .btnRegister {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 67.49px;
    height: 32px;
    cursor: pointer;  
    margin-top: 20px;
    color: #F8F9FA;
    background-color: #212529;
    border-radius: 4px;  
  }

  .containerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 22px;
    margin: 0 auto;  
    width: 80%;    
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;  
  }

  .tittleRegister {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 0 auto;
    color: #F8F9FA;
  }

  .subTittleRegister{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;
  }

  .formRegister{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 15px 22px;  
    width: 100%;    
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;  
  }

  .label {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #F8F9FA;
  }

  .inputRegister {
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
  }

  .errorRegister {
    color: red;
    font-size: 15px;
  }

  .select {
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
  }

  .option {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #343B41;
  }

  .btnBig {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    position: static;
    width: 100%;
    height: 48px;
    cursor: pointer;
    background-color: #59323F;
    border: 1.2182px solid #59323F;
    box-sizing: border-box;
    border-radius: 4px;
    flex-grow: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
  }
`

export const BtnBig = styled.button`
  
`





