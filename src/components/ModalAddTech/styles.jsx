import styled from "styled-components"

export const ModalConatainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1001;
  inset: 0;
  background-color: transparent;
  padding-top: 10%;

  .modalAddTechs {
    margin: 0 auto;
    padding: 30px;  
    width: 40%;
    height: 270px;  
    text-align: center;  
    border-radius: 5px;
    position: relative;
    background-color: #212529;

    @media (max-width: 320px) {
      width: 63%;
    }

    @media (min-width:320px) and (max-width: 425px) {
      width: 67%;
    }

    @media (min-width:1044px) {
      width: 36%;
    }
  }

  .containerHeadModal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0;
    background-color: #343B41;
    padding: 20px;
    margin-left: -29px;
    margin-top: -30px;
    width: 104.5%;
    height: 30px;  
  }

  .title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #F8F9FA;
  }

  .btnClosed {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    border: none;  
    background-color: #343B41;
    color: #868E96;
    cursor: pointer;
  }

  .formModal {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding-top: 25px;
  }

  .labelInput {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #F8F9FA;
  }

  .inputModal {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;  
    color: #F8F9FA;
    background-color: #343B41;
    width: 100%;
    height: 40px;
    border: 1.2182px solid #F8F9FA;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .failed {
    color: red;
    font-size: 15px;
    font-weight: bold; 
    margin: 0 auto;
  }

  .selectModal {
    border: 1.2182px solid #F8F9FA;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    width: 100%;
    height: 40px;  
    color: #F8F9FA;
    background-color: #343B41;
  }

  .btnAdd {
    background-color: #FF577F;
    color: #FFFFFF;
    border: 1.2182px solid #FF577F;
    box-sizing: border-box;
    border-radius: 4.06066px;
    height: 40px;
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;  
  }
`

